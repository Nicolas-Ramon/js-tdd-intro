
// function capitalizeFirstLetters(input) {
//     let originalSentence = input;
//     let word = originalSentence.split('');
  
//     for (i = 0; i < originalSentence.length; i++) {
//       word[0] = word[0].toUpperCase();
//       if (word[i] === " ") {
//         word[i+1] = word[i+1].toUpperCase();
//       } else {
//         word[i+1] = word[i+1];
//       }
//     }
//     return word.join("");
// }

function capitalizeFirstLetters(input) { 
    return input.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

module.exports = capitalizeFirstLetters;

console.log(capitalizeFirstLetters(`je suis un robot sympa, mais j'aime bien voyager`))
