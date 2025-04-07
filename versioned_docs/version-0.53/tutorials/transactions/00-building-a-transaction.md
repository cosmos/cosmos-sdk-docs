# Building a Transaction

These are the steps to build, sign and broadcast a transaction using v2 semantics.

1. Correctly set up imports

```go
import (
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	apisigning "cosmossdk.io/api/cosmos/tx/signing/v1beta1"
	"cosmossdk.io/client/v2/broadcast/comet"
	"cosmossdk.io/client/v2/tx"
	"cosmossdk.io/core/transaction"
	"cosmossdk.io/math"
	banktypes "cosmossdk.io/x/bank/types"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	cryptocodec "github.com/cosmos/cosmos-sdk/crypto/codec"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"

	"github.com/cosmos/cosmos-sdk/codec"
	addrcodec "github.com/cosmos/cosmos-sdk/codec/address"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

```

2. Create a gRPC connection

```go
clientConn, err := grpc.NewClient("127.0.0.1:9090", grpc.WithTransportCredentials(insecure.NewCredentials()))
if err != nil {
	log.Fatal(err)
}
```

3. Setup codec and interface registry

```go
	// Setup interface registry and register necessary interfaces
	interfaceRegistry := codectypes.NewInterfaceRegistry()
	banktypes.RegisterInterfaces(interfaceRegistry)
	authtypes.RegisterInterfaces(interfaceRegistry)
	cryptocodec.RegisterInterfaces(interfaceRegistry)

	// Create a ProtoCodec for encoding/decoding
	protoCodec := codec.NewProtoCodec(interfaceRegistry)

```

4. Initialize keyring

```go

	ckr, err := keyring.New("autoclikeyring", "test", home, nil, protoCodec)
	if err != nil {
		log.Fatal("error creating keyring", err)
	}
	kr, err := keyring.NewAutoCLIKeyring(ckr, addrcodec.NewBech32Codec("cosmos"))
	if err != nil {
		log.Fatal("error creating auto cli keyring", err)
	}


```

5. Setup transaction parameters

```go

	// Setup transaction parameters
	txParams := tx.TxParameters{
		ChainID:  "simapp-v2-chain",
		SignMode: apisigning.SignMode_SIGN_MODE_DIRECT,
		AccountConfig: tx.AccountConfig{
			FromAddress: "cosmos1t0fmn0lyp2v99ga55mm37mpnqrlnc4xcs2hhhy",
			FromName:    "alice",
		},
	}

	// Configure gas settings
	gasConfig, err := tx.NewGasConfig(100, 100, "0stake")
	if err != nil {
		log.Fatal("error creating gas config: ", err)
	}
	txParams.GasConfig = gasConfig

	// Create auth query client
	authClient := authtypes.NewQueryClient(clientConn)

	// Retrieve account information for the sender
	fromAccount, err := getAccount("cosmos1t0fmn0lyp2v99ga55mm37mpnqrlnc4xcs2hhhy", authClient, protoCodec)
	if err != nil {
		log.Fatal("error getting from account: ", err)
	}

	// Update txParams with the correct account number and sequence
	txParams.AccountConfig.AccountNumber = fromAccount.GetAccountNumber()
	txParams.AccountConfig.Sequence = fromAccount.GetSequence()

	// Retrieve account information for the recipient
	toAccount, err := getAccount("cosmos1e2wanzh89mlwct7cs7eumxf7mrh5m3ykpsh66m", authClient, protoCodec)
	if err != nil {
		log.Fatal("error getting to account: ", err)
	}

	// Configure transaction settings
	txConf, _ := tx.NewTxConfig(tx.ConfigOptions{
		AddressCodec:          addrcodec.NewBech32Codec("cosmos"),
		Cdc:                   protoCodec,
		ValidatorAddressCodec: addrcodec.NewBech32Codec("cosmosval"),
		EnabledSignModes:      []apisigning.SignMode{apisigning.SignMode_SIGN_MODE_DIRECT},
	})
```

6. Build the transaction

```go
// Create a transaction factory
	f, err := tx.NewFactory(kr, codec.NewProtoCodec(codectypes.NewInterfaceRegistry()), nil, txConf, addrcodec.NewBech32Codec("cosmos"), clientConn, txParams)
	if err != nil {
		log.Fatal("error creating factory", err)
	}

	// Define the transaction message
	msgs := []transaction.Msg{
		&banktypes.MsgSend{
			FromAddress: fromAccount.GetAddress().String(),
			ToAddress:   toAccount.GetAddress().String(),
			Amount: sdk.Coins{
				sdk.NewCoin("stake", math.NewInt(1000000)),
			},
		},
	}

	// Build and sign the transaction
	tx, err := f.BuildsSignedTx(context.Background(), msgs...)
	if err != nil {
		log.Fatal("error building signed tx", err)
	}


```

7. Broadcast the transaction

```go
// Create a broadcaster for the transaction
	c, err := comet.NewCometBFTBroadcaster("http://127.0.0.1:26675", comet.BroadcastSync, protoCodec)
	if err != nil {
		log.Fatal("error creating comet broadcaster", err)
	}

	// Broadcast the transaction
	res, err := c.Broadcast(context.Background(), tx.Bytes())
	if err != nil {
		log.Fatal("error broadcasting tx", err)
	}

```

8. Helpers
    
```go
// getAccount retrieves account information using the provided address
func getAccount(address string, authClient authtypes.QueryClient, codec codec.Codec) (sdk.AccountI, error) {
	// Query account info
	accountQuery, err := authClient.Account(context.Background(), &authtypes.QueryAccountRequest{
		Address: string(address),
	})
	if err != nil {
		return nil, fmt.Errorf("error getting account: %w", err)
	}

	// Unpack the account information
	var account sdk.AccountI
	err = codec.InterfaceRegistry().UnpackAny(accountQuery.Account, &account)
	if err != nil {
		return nil, fmt.Errorf("error unpacking account: %w", err)
	}

	return account, nil
}
```