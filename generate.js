'use strict';

var chalk = require('chalk');
var prompt = require('prompt');
var Wallet = require('./wallet');

var getChalk = function (type, msg) {

    switch (type) {
        case "alertText":
            return chalk.bgRed.white(msg);
            break;
        case "infoText":
            return chalk.bgBlack.green(msg);
            break;
    };

};

var divider = getChalk('alertText', '====');

console.log('\n' + getChalk('alertText', '! DO NOT FORGET THIS PASSWORD !'));
console.log(getChalk('alertText', '! DO NOT FORGET THIS PASSWORD !'));
console.log('\n');

prompt.message = getChalk('infoText', '');

prompt.start();

prompt.get([{

    hidden: true,
    required: true,
    type: 'string',
    name: 'password',
    replace: '\u00A4',
    pattern: /^.{9,200}$/,
    message: 'Password must be > 9 characters',
    description: getChalk('infoText', 'Password')


}], function (err, result) {

    var myWallet = Wallet.generate();
    var myV3 = myWallet.toV3String(result.password);
    var myPrivateKey = myWallet.getPrivateKeyString();
    var myPublicKey = myWallet.getPublicKeyString();
    var myAddress = myWallet.getAddressString();

    console.log('\n' + divider + getChalk('infoText', 'WALLET KEYS') + divider);
    console.log('\n' + getChalk('infoText', 'Geth Encrypted Private Key') + ' ' + myV3);
    console.log(getChalk('infoText', 'Private Key') + ' ' + myPrivateKey);
    console.log(getChalk('infoText', 'Public Key') + ' ' + myPublicKey);
    console.log(getChalk('infoText', 'Address') + ' ' +  myAddress);
    console.log('\n' + divider + getChalk('infoText', 'IMPORT WALLET') + divider);
    console.log('\n' + getChalk('infoText', 'Geth Encrypted Private Key'));
    console.log('\n    Save to a file inside ' + getChalk('infoText', 'DATADIR/keystore/'));
    console.log('\n        DATADIR is where your geth is configured to store data.');
    console.log('        See: https://github.com/ethereumproject/go-ethereum/wiki/Backup-&-restore');
    console.log('\n    Unlock with the password you entered above using ' + getChalk('infoText', 'geth --unlock ' + myAddress.substr(2) + ' console'));
    console.log('\n' + getChalk('infoText', 'Private Key'));
    console.log('\n    Save to a file and run ' + getChalk('infoText', 'geth account import filename'));
    console.log('\n        You should DELETE this file after successful import!');
    console.log('\n' + divider + getChalk('infoText', 'WARNING') + divider);
    console.log('\n' + getChalk('alertText', '!!! BEFORE SENDING TOKENS TO WALLET, VERIFY IT UNLOCKS !!!'));
    console.log('\nYou have been warned.  The creator of this software accepts NO RESPONSIBILITY.');
    console.log('\nBy using the data above, you agree that YOU ARE RESPONSIBLE for anything that happens.');
    console.log('\n' + divider + getChalk('infoText', 'DONATION INFORMATION') + divider);
    console.log('\n          ' + getChalk('infoText', 'ETC') + ' 2999ed06ee503402c5a0b57143d709cfae9ce695');
    console.log('          ' + getChalk('infoText', 'ETH') + ' 7e0e7e1a4aaf80db1e72528e29c72cd8b36a66de');
    console.log('          ' + getChalk('infoText', 'BTC') + ' 1FpxPPXXonXudUbid1GbXmBuhBoRQU7agT\n');

});