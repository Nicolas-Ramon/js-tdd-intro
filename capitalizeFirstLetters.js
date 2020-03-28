const assert = require('assert');

function capitalizeFirstLetters(input) {
    let originalSentence = input;
    let word = originalSentence.split('');
  
    for (i = 0; i < originalSentence.length; i++) {
      word[0] = word[0].toUpperCase();
      if (word[i] === " ") {
        word[i+1] = word[i+1].toUpperCase();
      } else {
        word[i+1] = word[i+1];
      }
    }
    return word.join("");
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
