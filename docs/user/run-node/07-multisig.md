---
sidebar_position: 1
---

# Guide to Multisig transactions


Multisig transactions are transactions that require signatures from multiple accounts before they can be executed. This is a common requirement in  scenarios where you want to have additional security or need to have multiple parties agree on a transaction before it is executed.

To create a multisig transaction, you first need to create a multisig public key. This is done by combining multiple public keys together into a single multisig key. This multisig key will then have an associated address, just like a normal account.

When you want to create a multisig transaction, you would create the transaction as normal, but instead of signing it with a single account's private key, you would need to sign it with the private keys of the accounts that make up the multisig key.

This is done by signing the transaction multiple times, once with each private key. The order of the signatures matters and must match the order of the public keys in the multisig key.

Once you have a transaction with the necessary signatures, it can be broadcasted to the network. The network will verify that the transaction has the necessary signatures from the accounts in the multisig key before it is executed.

## Step by step guide to multisig transactions

Check the keys you have in `--keyring-backend test`

```shell
simd keys list --keyring-backend test
````

If you don't already have accounts listed create the accounts using the below
```shell
simd keys add alice --keyring-backend test
simd keys add bob --keyring-backend test
simd keys add recipient --keyring-backend test
```

Create the multisig account

```shell 
simd keys add alice-bob-multisig --multisig alice,bob --multisig-threshold 2 --keyring-backend test
```

Check each of the accounts before any transaction and record the `amount` to ensure the transaction goes through
```shell
simd query bank balances $(simd keys show my_validator --keyring-backend test -a)
simd query bank balances $(simd keys show alice-bob-multisig --keyring-backend test -a)
```

With the account that has funds make sure the `alice-bob-multisig` funds. In our case our genesis account was `my_validator` which holds our funds

The below adds funds to the multisig
```shell
simd tx bank send $(simd keys show my_validator --keyring-backend test -a) $(simd keys show alice-bob-multisig --keyring-backend test -a) "10000stake" --keyring-backend test
```

Check both accounts again to see if the funds have transferred
```shell
simd query bank balances $(simd keys show alice-bob-multisig --keyring-backend test -a)
```

Create the transaction
```shell
simd tx bank send $(simd keys show alice-bob-multisig  --keyring-backend test -a) $(simd keys show recipient --keyring-backend test -a) 1000stake --generate-only --chain-id my-test-chain --keyring-backend test > tx.json
```

Sign Alice and use the address from multisig
```shell
simd tx sign --from $(simd keys show alice --keyring-backend test -a) --multisig=cosmos1re6mg24kvzjzmwmly3dqrqzdkruxwvctw8wwds tx.json --sign-mode amino-json --chain-id my-test-chain --keyring-backend test > tx-signed-alice.json
```

Sign Bob
```shell 
simd tx sign --from $(simd keys show bob --keyring-backend test -a) --multisig=cosmos1re6mg24kvzjzmwmly3dqrqzdkruxwvctw8wwds tx.json --sign-mode amino-json --chain-id my-test-chain --keyring-backend test > tx-signed-bob.json
```

Perform multisign
```shell
simd tx multisign tx.json alice-bob-multisig tx-signed-alice.json tx-signed-bob.json  --chain-id my-test-chain --keyring-backend test > tx-signed.json
```

Broadcast the transaction to the network
```shell
simd tx broadcast tx-signed.json --chain-id my-test-chain --gas auto --fees 250stake --keyring-backend test
```

Query transaction again to see if the funds went through to recipient
```shell
simd query bank balances $(simd keys show alice-bob-multisig --keyring-backend test -a)
```
