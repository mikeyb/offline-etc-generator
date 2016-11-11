'use strict';

var prompt = require('prompt');
var Wallet = require('./wallet');

var attempts = 0;

prompt.start();

prompt.get([{

    required: true,
    type: 'string',
    name: 'addressString',
    pattern: /^[0-9a-f]{1,40}$/,
    message: 'Addresses can only contain [0-9a-fA-F] characters',
    description: 'Vanity Address To Generate'


}], function (err, result) {

    console.log('Trying to crack: ' + result.addressString);

    while (true) {

        var myWallet = Wallet.generate();

        var myAddress = myWallet.getAddressString().substr(2);

        var vanityLength = result.addressString.length;

        if (myAddress.substr(0,vanityLength) == result.addressString) {

            console.log('\nVanity Address Found: 0x' + myAddress);

            console.log('Vanity Key: ' + myWallet.getPrivateKeyString());

            break;

        };

    };

});
