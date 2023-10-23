const CryptoJS = require('crypto-js');
const key = '12345678'; 
const data = 'Hello, World!';
//criptografar
const encrypted = CryptoJS.DES.encrypt(data, key);
const encryptedBase64 = encrypted.toString();
console.log('Encrypted Data:', encryptedBase64);
//descriptografar
const decrypted = CryptoJS.DES.decrypt(encrypted, key);
const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
console.log('Decrypted Data:', decryptedData);
