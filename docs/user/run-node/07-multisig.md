---
sidebar_position: 1
---

# Guide to Multisig transactions

## Overview

Multisignature accounts are accounts that are generated from multiple public keys. A multisig necessitates that any transaction made on its behalf must be signed by a specified threshold of its members.

A common use case for multisigs is to increase security of a signing account, and/or enable multiple parties to agree on and authorize a transaction.

To create a multisig transaction, you first need to create a multisig public key. This is done by combining multiple public keys together into a single multisig key. This multisig key will then have an associated address, just like a normal account.

When you want to create a multisig transaction, you would create the transaction as normal, but instead of signing it with a single account's private key, you would need to sign it with the private keys of the accounts that make up the multisig key.

This is done by signing the transaction multiple times, once with each private key. The order of the signatures matters and must match the order of the public keys in the multisig key.

Once you have a transaction with the necessary signatures, it can be broadcasted to the network. The network will verify that the transaction has the necessary signatures from the accounts in the multisig key before it is executed.

## Step by step guide to multisig transactions

Check the keys you have in `--keyring-backend test`.

```shell
simd keys list --keyring-backend test
````

If you don't already have accounts listed create the accounts using the below.
```shell
simd keys add alice --keyring-backend test
simd keys add bob --keyring-backend test
simd keys add recipient --keyring-backend test
```

Create the multisig account between bob and alice.
```shell 
simd keys add alice-bob-multisig --multisig alice,bob --multisig-threshold 2 --keyring-backend test
```

Before initiating any transaction, verify the balance of each account and note down the amount. This step is crucial to confirm that the transaction can be processed successfully.
```shell
simd query bank balances $(simd keys show my_validator --keyring-backend test -a)
simd query bank balances $(simd keys show alice-bob-multisig --keyring-backend test -a)
```

Ensure that the alice-bob-multisig account has funds. In our case, the genesis account, my_validator, holds our funds. Therefore, we will transfer funds from the `my_validator` account to the `alice-bob-multisig` account.

The below command adds funds to the multisig.
```shell
simd tx bank send $(simd keys show my_validator --keyring-backend test -a) $(simd keys show alice-bob-multisig --keyring-backend test -a) "10000stake" --keyring-backend test
```

Check both accounts again to see if the funds have transferred.
```shell
simd query bank balances $(simd keys show alice-bob-multisig --keyring-backend test -a)
```

Initiate the transaction. This command will create a transaction from the multisignature account `alice-bob-multisig` to send 1000stake to the recipient account. The transaction will be generated but not broadcasted yet.
```shell
simd tx bank send $(simd keys show alice-bob-multisig --keyring-backend test -a) $(simd keys show recipient --keyring-backend test -a) 1000stake --generate-only --chain-id my-test-chain --keyring-backend test > tx.json
```

Alice signs the transaction using her key and refers to the multisig address. Execute the command below to accomplish this:
```shell
simd tx sign --from $(simd keys show alice --keyring-backend test -a) --multisig=cosmos1re6mg24kvzjzmwmly3dqrqzdkruxwvctw8wwds tx.json --sign-mode amino-json --chain-id my-test-chain --keyring-backend test > tx-signed-alice.json
```

Let's repeat for Bob.
```shell 
simd tx sign --from $(simd keys show bob --keyring-backend test -a) --multisig=cosmos1re6mg24kvzjzmwmly3dqrqzdkruxwvctw8wwds tx.json --sign-mode amino-json --chain-id my-test-chain --keyring-backend test > tx-signed-bob.json
```

Execute a multisign transaction by using the `simd tx multisign` command. This command requires the names and signed transactions of all the participants in the multisig account. Here, Alice and Bob are the participants:
```shell
simd tx multisign tx.json alice-bob-multisig tx-signed-alice.json tx-signed-bob.json  --chain-id my-test-chain --keyring-backend test > tx-signed.json
```

Once the multisign transaction is formed, it needs to be broadcasted to the network. This is done using the simd tx broadcast command:
```shell
simd tx broadcast tx-signed.json --chain-id my-test-chain --gas auto --fees 250stake --keyring-backend test
```

Once the transaction is broadcasted, it's a good practice to verify if the transaction was successful. You can query the recipient's account balance again to confirm if the funds were indeed transferred:
```shell
simd query bank balances $(simd keys show alice-bob-multisig --keyring-backend test -a)
```
