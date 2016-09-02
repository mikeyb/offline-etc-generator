'use strict';

var crypto = require('crypto');

var ethUtils = require('ethereumjs-util');

var readline = require('readline-sync');

var scrypt = require('scryptsy');

var uuid = require('uuid');

var passwordInput = readline.question('Enter password for key generation: ', {

    hideEchoBack: true,

});

console.log('\n=============================================================');

console.log('\n! DO NOT FORGET THIS PASSWORD !');

console.log('\nGenerating Key, please standby.');

console.log('\n=============================================================');

var iv = crypto.randomBytes(16);

var cipheralgo = 'aes-128-ctr';

var kdf = 'scrypt';

var kdfparams = {

    dklen: 32,

    salt: crypto.randomBytes(32).toString('hex'),

    n: 262144,

    r: 8,

    p: 1

};

var derivedKey = scrypt(new Buffer(passwordInput), kdfparams.salt, kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);

var cipher = crypto.createCipheriv(cipheralgo, derivedKey.slice(0, 16), iv);

var ciphertext = Buffer.concat([cipher.update(derivedKey), cipher.final()]);

var mac = ethUtils.sha3(Buffer.concat([derivedKey.slice(16, 32), new Buffer(ciphertext, 'hex')]));

var encrypted = JSON.stringify({

    version: 3,

    id: uuid.v4({

        random: crypto.randomBytes(16)

    }),

    address: ethUtils.privateToAddress(derivedKey).toString('hex'),

    Crypto: {

        ciphertext: ciphertext.toString('hex'),

        cipherparams: {

            iv: iv.toString('hex')

        },

        cipher: cipheralgo,

        kdf: kdf,

        kdfparams: kdfparams,

        mac: mac.toString('hex')

    }

});

var publicKey = ethUtils.privateToPublic(derivedKey).toString('hex');

var address = ethUtils.privateToAddress(derivedKey).toString('hex');

console.log('\nGeth/Mist Encrypted Format: ' + encrypted);

console.log('\nEthereum Private Key: ' + derivedKey.toString('hex'));

console.log('\nEthereum Public Key: ' + publicKey.toString('hex'));

console.log('\nEthereum Address: ' + address);

console.log('\n=============================================================');

console.log('\nEncrypted Format: save to a file inside <DATADIR>/keystore');

console.log('\n    To unlock use the password you entered above.');

console.log('\n! BEFORE SENDING LARGE AMOUNTS OF TOKENS VERIFY IT UNLOCKS !');

console.log('\nPrivate Key: save to a file and run: geth account import file');

console.log('\n=============================================================');

console.log('\nDonations --> ETC: 2999ed06ee503402c5a0b57143d709cfae9ce695');

console.log('\n          --> ETH: 7e0e7e1a4aaf80db1e72528e29c72cd8b36a66de');

console.log('\n          --> BTC: 1FpxPPXXonXudUbid1GbXmBuhBoRQU7agT');

console.log('\n=============================================================');