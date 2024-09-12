var crypto = require('crypto')
var assert = require("assert")
var curva='wap-wsg-idm-ecid-wtls11'
var cif="aes256"

//Alice's key
var alice = crypto.createECDH(curva)
var aliceKey = alice.generateKeys()


//Bob's Key
var bob = crypto.createECDH(curva)
var bobKey = bob.generateKeys()

//Secret
var aliceSecret =alice.computeSecret(bobKey)
var bobSecret = bob.computeSecret(aliceKey)

var aliceCipher = crypto.createCipher(cif,aliceSecret)
var aliceDecipher = crypto.createDecipher(cif,aliceSecret)

var bobCipher = crypto.createCipher(cif,bobSecret)
var bobDecipher = crypto.createDecipher(cif,bobSecret)

var msg1 = "Hey bob, I'm alice";
var eMsg1 = aliceCipher.update(msg1, 'utf8', 'hex'); 
eMsg1 += aliceCipher.final('hex'); 
console.log("alice says (clear): " + msg1); 
console.log("alice says (ciphered): " + eMsg1);

var dMsg1 = bobDecipher.update(eMsg1, 'hex', 'utf8');
dMsg1 += bobDecipher.final('utf8'); 
console.log("bob receives (ciphered): " + eMsg1); 
console.log("bob receives (deciphered): " + dMsg1);

// bob ciphers a message for alice
var msg2 = "Hey alice, how are you doing?";
var eMsg2 = bobCipher.update(msg2, 'utf8', 'hex');
eMsg2 += bobCipher.final('hex'); console.log("bob says (clear): " + msg2); 
console.log("bob says (ciphered): " + eMsg2);

var dMsg2 = aliceDecipher.update(eMsg2, 'hex', 'utf8')
dMsg2 += aliceDecipher.final('utf8'); 
console.log("alice receives (ciphered): " + eMsg2); 
console.log("alice receives (deciphered): " + dMsg2);

