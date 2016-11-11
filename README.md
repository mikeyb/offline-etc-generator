# Offline Ethereum (Classic) Generator

## Requirements

*  nodejs

## Installation

```
git clone https://github.com/mikeyb/offline-etc-generator.git

cd offline-etc-generator

npm install
```

## Usage

#### Generate random keys
`node generate`

#### Generate vanity address
`node vanity`

## Example

```
$ node generate                                                                                                    mew ✭ ✚ ✱
  
  ! DO NOT FORGET THIS PASSWORD !
  ! DO NOT FORGET THIS PASSWORD !
  
  
  Password:  ¤¤¤¤¤¤¤¤¤¤
  
  
  ====WALLET KEYS====
  
  Geth Encrypted Private Key {"version":3,"id":"c2337130-2099-4f23-93fb-bdf7495d8ebd","address":"888b2951816c71c9ea32ef941328911c6041aad1","Crypto":{"ciphertext":"7bd81b31ad9a1350ada8001f5be7bb61ac7e8e3506fa2e4249e2bd103e46cc5c","cipherparams":{"iv":"aaa568a9da472f6dbbd94ea62fe09077"},"cipher":"aes-128-ctr","kdf":"pbkdf2","kdfparams":{"dklen":32,"salt":"6abc743b5262776787453e4f90edc67707a29d513c7b3d631bbc743b55f68ae1","c":262144,"prf":"hmac-sha256"},"mac":"b15b7d403cafcddea67dfb2c9910b58038bbcd75777ef08c9e247a1c601abc48"}}
  Private Key be736ee17fcbbc94e11c2d3759af31ac60eb53e95b9b3c3d66836b3b02c3a4c9
  Public Key 0x233520f70dcca9e152f60475e40a3fc8fb2b1e34b96cae67e41398e7fed951ff0c9dde93bcb5b9d390ccac4fb208d4674ffa113870f94d278715ef2fa2511c82
  Address 0x888b2951816c71c9ea32ef941328911c6041aad1
  
  ====IMPORT WALLET====
  
  Geth Encrypted Private Key
  
      Save to a file inside DATADIR/keystore/
  
          DATADIR is where your geth is configured to store data.
          See: https://github.com/ethereumproject/go-ethereum/wiki/Backup-&-restore
  
      Unlock with the password you entered above using geth --unlock 888b2951816c71c9ea32ef941328911c6041aad1 console
  
  Private Key
  
      Save to a file and run geth account import filename
  
          You should DELETE this file after successful import!
  
  ====WARNING====
  
  !!! BEFORE SENDING TOKENS TO WALLET, VERIFY IT UNLOCKS !!!
  
  You have been warned.  The creator of this software accepts NO RESPONSIBILITY.
  
  By using the data above, you agree that YOU ARE RESPONSIBLE for anything that happens.
  
  ====DONATION INFORMATION====
  
            ETC 2999ed06ee503402c5a0b57143d709cfae9ce695
            ETH 7e0e7e1a4aaf80db1e72528e29c72cd8b36a66de
            BTC 1FpxPPXXonXudUbid1GbXmBuhBoRQU7agT
```
