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

`node generate.js`

## Example

```
$ node generate.js                                                                                                  master ✚
Enter password for key generation: *

=============================================================

! DO NOT FORGET THIS PASSWORD !

Generating Key, please standby.

=============================================================

Geth/Mist Encrypted Format: {"version":3,"id":"1eeea5d3-fad3-4d13-bffe-d1907efd26e6","address":"d13607759b8293fe6438d821d881d596f421e4ce","Crypto":{"ciphertext":"4b3ffb1f7528e7316271fe76eb532243c1171872e892c315ba3cd7a362211053","cipherparams":{"iv":"f71bfa10e3c5b0501d46c5e2ba20b979"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"f94061c3121cb08b85156ec4ab4decacea671b37612f79c7a254e9e94e3a9409","n":262144,"r":8,"p":1},"mac":"acd5b7cd0a416482f462501acf19151614249021f404057f4d9a5d964fe605b6"}}

Ethereum Private Key: 10afbf8f66982b1235a3a91ac2edd90d36d852d4dcbbfd138589af64675fbee4

Ethereum Public Key: 391c7abf20569a3d5c03a56f19dc433a1cbf8dbd57751e0d09bf812876f073cebe9d8e6ae9dbec28bd9e70be28deb518507c10df78ed71e7094abc36da69de1e

Ethereum Address: d13607759b8293fe6438d821d881d596f421e4ce

=============================================================

Encrypted Format: save to a file inside <DATADIR>/keystore

    To unlock use the password you entered above.

! BEFORE SENDING LARGE AMOUNTS OF TOKENS VERIFY IT UNLOCKS !

Private Key: save to a file and run: geth account import file

=============================================================

Donations --> ETC: 2999ed06ee503402c5a0b57143d709cfae9ce695

          --> ETH: 7e0e7e1a4aaf80db1e72528e29c72cd8b36a66de

          --> BTC: 1FpxPPXXonXudUbid1GbXmBuhBoRQU7agT

=============================================================
```
