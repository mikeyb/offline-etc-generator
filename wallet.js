'use strict';

var crypto = require('crypto');
var ethUtils = require('ethereumjs-util');
var uuid = require('uuid');

var Wallet = function(pk) {
	this.privateKey = pk.length == 32 ? pk : Buffer(pk, 'hex');
};

Wallet.generate = function() {
    return new Wallet(crypto.randomBytes(32));
};

Wallet.prototype.getPrivateKey = function() {
	return this.privateKey;
};

Wallet.prototype.getPrivateKeyString = function() {
	return this.getPrivateKey().toString('hex');
};

Wallet.prototype.getPublicKey = function() {
	return ethUtils.privateToPublic(this.privateKey);
};

Wallet.prototype.getPublicKeyString = function() {
	return '0x' + this.getPublicKey().toString('hex');
};

Wallet.prototype.getAddress = function() {
	return ethUtils.privateToAddress(this.privateKey);
};

Wallet.prototype.getAddressString = function() {
	return '0x' + this.getAddress().toString('hex');
};

Wallet.prototype.getChecksumAddressString = function() {
	return ethUtils.toChecksumAddress(this.getAddressString());
};

Wallet.fromPrivateKey = function(pk) {
	return new Wallet(pk);
};

Wallet.prototype.toV3 = function(password) {
	var opts = {};
    var salt = crypto.randomBytes(32);
	var iv = crypto.randomBytes(16);
	var kdf = 'pbkdf2';
	var kdfparams = {
        dklen: 32,
        salt: salt.toString('hex'),
        c: 1048576,
        prf: 'hmac-sha256'
	};
    var derivedKey = crypto.pbkdf2Sync(new Buffer(password), salt, kdfparams.c, kdfparams.dklen, 'sha256');
	var cipher = crypto.createCipheriv('aes-128-ctr', derivedKey.slice(0, 16), iv);
	var ciphertext = Buffer.concat([cipher.update(this.privateKey), cipher.final()]);
	var mac = ethUtils.sha3(Buffer.concat([derivedKey.slice(16, 32), new Buffer(ciphertext, 'hex')]));
	return {
		version: 3,
		id: uuid.v4({
		    random: crypto.randomBytes(16)
		}),
		address: this.getAddress().toString('hex'),
		Crypto: {
			ciphertext: ciphertext.toString('hex'),
			cipherparams: {
				iv: iv.toString('hex')
			},
			cipher: 'aes-128-ctr',
			kdf: kdf,
			kdfparams: kdfparams,
			mac: mac.toString('hex')
		}
	};
};

Wallet.prototype.toV3String = function(password) {
	return JSON.stringify(this.toV3(password))
};

module.exports = Wallet;