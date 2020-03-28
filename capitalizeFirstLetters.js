const assert = require('assert');

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
