# Mitigate auction front running

## What are Vote extensions?

Vote extensions is arbitrary information which can be inserted into a block. This feature is part of ABCI 2.0 methods, which is available for use in the SDK 0.50 release and 0.38 CometBFT release. 

More information about vote extensions can be seen [here](../../../build/building-apps/vote-extensions).

## Context

For this tutorial we are using an example of an application that is mitigating auction front running. 

Please checkout https://github.com/fatal-fruit/abci-workshop to see the example.


## Simulation of Auction Front-Running

Please checkout `part 1` of the example and then run:

```shell
./scripts/single_node/setup.sh
```

In another window run :

```shell
./scripts/single_node/frontrun.sh
```

Here we can see alice attempts to reserve the namespace `bob.cosmos`

To ensure the front-running happened go back to the logs and search for  `Found a Bid to Snipe`


Below we query the namespace `bob.cosmos` to see if alice managed to successfully reserve `bob.cosmos`

```shell 
./build/cosmappd query ns whois bob.cosmos
```

You should receive something like this:

```shell
name:
  amount:
  - amount: "2000"
    denom: uatom
  name: bob.cosmos
  owner: cosmos185gc7c296w0xjlq9kjdt6gghnqvdmyckv64e7a
  resolve_address: cosmos185gc7c296w0xjlq9kjdt6gghnqvdmyckv64e7a
```

List the keys and check to see who successfully reserved `bob.cosmos`

```shell
./build/cosmappd keys list --home $HOME/.cosmappd --keyring backend test
```

Match the two addresses and the owner should be `val1`


## Mitigating Front-running with Vote Extensions Steps


1.	Create new types in `abci/types.go`

Think about what exactly we will need for each `Type`. Keep in mind we are also using our own mempool for the ordering of transactions. 

```go
package abci

import (
	//import the necessary files
)

type PrepareProposalHandler struct {
	logger      log.Logger
	txConfig    client.TxConfig
	cdc         codec.Codec
	mempool     *mempool.ThresholdMempool
	txProvider  provider.TxProvider
	keyname     string
	runProvider bool
}

type ProcessProposalHandler struct {
	TxConfig client.TxConfig
	Codec    codec.Codec
	Logger   log.Logger
}

type VoteExtHandler struct {
	logger       log.Logger
	currentBlock int64
	mempool      *mempool.ThresholdMempool
	cdc          codec.Codec
}

type InjectedVoteExt struct {
	VoteExtSigner []byte
	Bids          [][]byte
}

type InjectedVotes struct {
	Votes []InjectedVoteExt
}

type AppVoteExtension struct {
	Height int64
	Bids   [][]byte
}

type SpecialTransaction struct {
	Height int
	Bids   [][]byte
}
```


2.	Create Vote Extension Handler In `/abci/proposal.go` here we peek into the mempool and submit a list of all unconfirmed bids. We proceed to verify that we can access the list of unconfirmed transactions in the `abci.RequestPrepareProposal` during the following block. Vote Extensions can be found in `LocalLastCommit`.
   
```go
func NewVoteExtensionHandler(lg log.Logger, mp *mempool.ThresholdMempool, cdc codec.Codec) *VoteExtHandler {  
   return &VoteExtHandler{  
      logger:  lg,  
      mempool: mp,  
      cdc:     cdc,  
   }  
}

func (h *VoteExtHandler) ExtendVoteHandler() sdk.ExtendVoteHandler {
	return func(ctx sdk.Context, req *abci.RequestExtendVote) (*abci.ResponseExtendVote, error) {
      h.logger.Info(fmt.Sprintf("Extending votes at block height : %v", req.Height))

voteExtBids := [][]byte{}

// Get mempool txs
itr := h.mempool.SelectPending(context.Background(), nil)
for itr != nil {
	tmptx := itr.Tx()
	sdkMsgs := tmptx.GetMsgs()

	// Iterate through msgs, check for any bids
	for _, msg := range sdkMsgs {
		switch msg := msg.(type) {
		case *nstypes.MsgBid:
		// Marshal sdk bids to []byte
			bz, err := h.cdc.Marshal(msg)
			if err != nil {
				h.logger.Error(fmt.Sprintf("Error marshalling VE Bid : %v", err))
				break
			}
			voteExtBids = append(voteExtBids, bz)
		default:
		}
	}

	// Move tx to ready pool
	err := h.mempool.Update(context.Background(), tmptx)
	
	// Remove tx from app side mempool
	if err != nil {
		h.logger.Info(fmt.Sprintf("Unable to update mempool tx: %v", err))
	}
	
	itr = itr.Next()

}

// Create vote extension
voteExt := AppVoteExtension{
Height: req.Height,
Bids: voteExtBids,
}

// Encode Vote Extension
bz, err := json.Marshal(voteExt)
if err != nil {
	return nil, fmt.Errorf("Error marshalling VE: %w", err)
}

return &abci.ResponseExtendVote{VoteExtension: bz}, nil
}
```


3. Configure Handler in `app/app.go` 
Next we configure the handler app in `app.go`

```go
bApp := baseapp.NewBaseApp(AppName, logger, db, txConfig.TxDecoder(), baseAppOptions...)

...

voteExtHandler := abci2.NewVoteExtensionHandler(logger, mempool, appCodec)
bApp.SetExtendVoteHandler(voteExtHandler.ExtendVoteHandler())
```


4. Validate Vote Extensions propagated We want to add the following to the `PrepareProposalHandler` to print out and test our vote extensions have entered

```go
if req.Height > 2 {  
   voteExt := req.GetLocalLastCommit()  
   h.logger.Info(fmt.Sprintf("🛠️ :: Get vote extensions: %v", voteExt))  
}
```


5. Process Vote Extensions in Prepare Proposal
Within `processVoteExtensions` method, all of the vote extensions are retrieved from the last commit and are turned into a special transaction. The special transaction is appended to the proposal.

```go
func (h *PrepareProposalHandler) PrepareProposalHandler() sdk.PrepareProposalHandler {
	return func(ctx sdk.Context, req *abci.RequestPrepareProposal) (*abci.ResponsePrepareProposal, error) {

      if req.Height > 2 {

			// Get Special Transaction
			ve, err := processVoteExtensions(req, h.logger)
			if err != nil {
				h.logger.Error(fmt.Sprintf("❌️ :: Unable to process Vote Extensions: %v", err))
			}

			// Marshal Special Transaction
			bz, err := json.Marshal(ve)
			if err != nil {
				h.logger.Error(fmt.Sprintf("❌️ :: Unable to marshal Vote Extensions: %v", err))
			}

			// Append Special Transaction to proposal
			proposalTxs = append(proposalTxs, bz)
		}

}
```

6. Create Process Proposal Handler
Within the `ProcessProposalHandler` we are taking the special transaction and validating it. Within the `validateBids` method we check how many times a bid has been submitted. The threshold count for valid bids is calculated based on the total number of votes. This ensures that only bids that have been submitted by a significant number of voters are considered valid. This helps to prevent manipulation of the special transaction process.


```go
func (h *ProcessProposalHandler) ProcessProposalHandler() sdk.ProcessProposalHandler {
	return func(ctx sdk.Context, req *abci.RequestProcessProposal) (resp *abci.ResponseProcessProposal, err error) {
		h.Logger.Info(fmt.Sprintf("⚙️ :: Process Proposal"))

		// The first transaction will always be the Special Transaction
		numTxs := len(req.Txs)
		if numTxs == 1 {
			h.Logger.Info(fmt.Sprintf("⚙️:: Number of transactions :: %v", numTxs))
		}

		if numTxs >= 1 {
			h.Logger.Info(fmt.Sprintf("⚙️:: Number of transactions :: %v", numTxs))
			var st SpecialTransaction
			err = json.Unmarshal(req.Txs[0], &st)
			if err != nil {
				h.Logger.Error(fmt.Sprintf("❌️:: Error unmarshalling special Tx in Process Proposal :: %v", err))
			}
			if len(st.Bids) > 0 {
				h.Logger.Info(fmt.Sprintf("⚙️:: There are bids in the Special Transaction"))
				var bids []nstypes.MsgBid
				for i, b := range st.Bids {
					var bid nstypes.MsgBid
					h.Codec.Unmarshal(b, &bid)
					h.Logger.Info(fmt.Sprintf("⚙️:: Special Transaction Bid No %v :: %v", i, bid))
					bids = append(bids, bid)
				}
				// Validate Bids in Tx
				txs := req.Txs[1:]
				ok, err := ValidateBids(h.TxConfig, bids, txs, h.Logger)
				if err != nil {
					h.Logger.Error(fmt.Sprintf("❌️:: Error validating bids in Process Proposal :: %v", err))
					return &abci.ResponseProcessProposal{Status: abci.ResponseProcessProposal_REJECT}, nil
				}
				if !ok {
					h.Logger.Error(fmt.Sprintf("❌️:: Unable to validate bids in Process Proposal :: %v", err))
					return &abci.ResponseProcessProposal{Status: abci.ResponseProcessProposal_REJECT}, nil
				}
				h.Logger.Info("⚙️:: Successfully validated bids in Process Proposal")
			}
		}

		return &abci.ResponseProcessProposal{Status: abci.ResponseProcessProposal_ACCEPT}, nil
	}
}
```

3. **Create ProcessVoteExtensions** 

```go
func processVoteExtensions(req *abci.RequestPrepareProposal, log log.Logger) (SpecialTransaction, error) {
	log.Info(fmt.Sprintf("🛠️ :: Process Vote Extensions"))

	// Create empty response
	st := SpecialTransaction{
		0,
		[][]byte{},
	}

	// Get Vote Ext for H-1 from Req
	voteExt := req.GetLocalLastCommit()
	votes := voteExt.Votes

	// Iterate through votes
	var ve AppVoteExtension
	for _, vote := range votes {
		// Unmarshal to AppExt
		err := json.Unmarshal(vote.VoteExtension, &ve)
		if err != nil {
			log.Error(fmt.Sprintf("❌ :: Error unmarshalling Vote Extension"))
		}

		st.Height = int(ve.Height)

		// If Bids in VE, append to Special Transaction
		if len(ve.Bids) > 0 {
			log.Info("🛠️ :: Bids in VE")
			for _, b := range ve.Bids {
				st.Bids = append(st.Bids, b)
			}
		}
	}

	return st, nil
}
```


**3. Configure Process Proposal Handler in App** In `/app/app.go`

```go
processPropHandler := abci2.ProcessProposalHandler{app.txConfig, appCodec, logger}
bApp.SetProcessProposal(processPropHandler.ProcessProposalHandler())
```

If you want to validate the bids such as we have in this example you must ensure you do the following:

* Decode the proposal transactions and extract the bids
* Map bid frequencies, where the number of times the bid appears in the VE is stored
* Figure out how many votes are needed for a bid to be considered valid
* Iterate over the bids in the proposal and check if each bid appears in the VE at least as many times as the threshold count (for the threshold count we will need to implement the `ThresholdMempool`)

Be sure to include:

```
	req.ConsensusParams = &cmtproto.ConsensusParams{
		Abci: &cmtproto.ABCIParams{
			VoteExtensionsEnableHeight: 2,
		},
	}
```

for the rc within this tutorial but this can be removed when upgrading to the final 0.50 release.

## Demo of Mitigating Front-Running with Vote Extensions

Here we are using a 3 validator network. The Beacon validator has a custom transaction provider enabled. 

Here we have `alice` attempt to reserve `bob.cosmos`

```shell
./scripts/reserve.sh "bob.cosmos"
```

Query to verify the name has been reserved

```shell
./scripts/whois.sh "bob.cosmos"
```

It should return 

```{
  "name":  {
    "name":  "bob.cosmos",
    "owner":  "cosmos1nq9wuvuju4jdmpmzvxmg8zhhu2ma2y2l2pnu6w",
    "resolve_address":  "cosmos1h6zy2kn9efxtw5z22rc5k9qu7twl70z24kr3ht",
    "amount":  [
      {
        "denom":  "uatom",
        "amount":  "1000"
      }
    ]
  }
}
```

If the Beacon attempts to front run the bid, we will see the following logs during `ProcessProposal`.

```shell
2:47PM ERR ❌️:: Detected invalid proposal bid :: name:"bob.cosmos" resolveAddress:"cosmos1wmuwv38pdur63zw04t0c78r2a8dyt08hf9tpvd" owner:"cosmos1wmuwv38pdur63zw04t0c78r2a8dyt08hf9tpvd" amount:<denom:"uatom" amount:"2000" >  module=server
2:47PM ERR ❌️:: Unable to validate bids in Process Proposal :: <nil> module=server
2:47PM ERR prevote step: state machine rejected a proposed block; this should not happen:the proposer may be misbehaving; prevoting nil err=null height=142 module=consensus round=0
```

If we run:  

```shell
list-beacon-keys.sh
```

We should receive:

```shell
[
  {
    "name": "alice",
    "type": "local",
    "address": "cosmos1h6zy2kn9efxtw5z22rc5k9qu7twl70z24kr3ht",
    "pubkey": "{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"A32cvBUkNJz+h2vld4A5BxvU5Rd+HyqpR3aGtvEhlm4C\"}"
  },
  {
    "name": "barbara",
    "type": "local",
    "address": "cosmos1nq9wuvuju4jdmpmzvxmg8zhhu2ma2y2l2pnu6w",
    "pubkey": "{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"Ag9PFsNyTQPoJdbyCWia5rZH9CrvSrjMsk7Oz4L3rXQ5\"}"
  },
  {
    "name": "beacon-key",
    "type": "local",
    "address": "cosmos1ez9a6x7lz4gvn27zr368muw8jeyas7sv84lfup",
    "pubkey": "{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"AlzJZMWyN7lass710TnAhyuFKAFIaANJyw5ad5P2kpcH\"}"
  },
  {
    "name": "cindy",
    "type": "local",
    "address": "cosmos1m5j6za9w4qc2c5ljzxmm2v7a63mhjeag34pa3g",
    "pubkey": "{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"A6F1/3yot5OpyXoSkBbkyl+3rqBkxzRVSJfvSpm/AvW5\"}"
  }
]
```


This allows us to match up the addresses and see that the bid was not front run by the beacon due as the resolve address is Alice's address and not the beacons address.
