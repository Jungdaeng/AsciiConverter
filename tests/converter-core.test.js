const assert = require('node:assert/strict');
const { normalizeHex, hexToAscii, asciiToHex } = require('../converter-core');

assert.equal(normalizeHex('0x48 0x65 6C-6C_6F'), '48656C6C6F');
assert.equal(hexToAscii('48 65 6C 6C 6F'), 'Hello');
assert.equal(asciiToHex('Hello'), '48 65 6C 6C 6F');
assert.equal(asciiToHex('A'), '41');
assert.equal(hexToAscii('41'), 'A');

let gotError = false;
try {
  hexToAscii('ABC');
} catch (error) {
  gotError = true;
  assert.match(error.message, /홀수/);
}

assert.equal(gotError, true);
console.log('converter-core tests passed');
