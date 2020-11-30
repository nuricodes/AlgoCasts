// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // turn str into an array pass in cb fn and starting arg
    // within the cn fn pass in accumulator and starting value
    return str.split('').reduce((reversed, character) => character + reversed, '');
}
reverse("apple");
reverse("hello");
reverse("Greetings!");

module.exports = reverse;

////////////////////////////
// solution 1
///////////////////////////

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

////////////////////////////
// solution 2
///////////////////////////

// function reverse(str) {
//     // create an empty string called 'reversed'
//     let reversed = '';
//     // for each character in the provided string
//     for (let character of str) {
//         // take the character and add it to the start of the 'reversed'
//         reversed = character + reversed;
//     }
//     return reversed
// }