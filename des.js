// JOGA ISSO NO SHELL: $env:NODE_OPTIONS = "--openssl-legacy-provider"

const crypto = require('crypto');
const algorithm = 'des-ecb';

const key = Buffer.from("d0e276d0144890d3", "hex");

const cipher = crypto.createCipheriv(algorithm, key, null);
let encrypted = cipher.update("Eu gosto da aula de segurança", 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log("Encrypted: ", encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, null);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log("Decrypted: ", decrypted);
