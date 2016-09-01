'use strict';

var crypto = require('crypto');
var ethUtils = require('ethereumjs-util');

var buffer = crypto.randomBytes(32);

var privateKey = new Buffer(buffer, 'hex');

var publicKey = ethUtils.privateToPublic(privateKey).toString('hex');

var address = ethUtils.privateToAddress(privateKey).toString('hex')

console.log('\nEthereum Private Key: ' + privateKey.toString('hex'));
console.log('\nEthereum Public Key: ' + publicKey.toString('hex'));
console.log('\nEthereum Address: ' + address);
