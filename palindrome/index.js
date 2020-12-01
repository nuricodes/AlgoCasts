// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str === str.split('').reduce((reversed, character) => character + reversed, '');

}


module.exports = palindrome;

///////////////////////////////////////
// SOLUTION 1
///////////////////////////////////////

// function palindrome(str) {
//     let reversed = str.split('').reverse().join('')

// }

///////////////////////////////////////
// SOLUTION 2
///////////////////////////////////////

// function palindrome(str) {
//     let reversed = ''
//     
//     for (character of str) {
//         reversed = character + reversed;
//     }
//     return str === reversed

// }

///////////////////////////////////////
// SOLUTION 3
///////////////////////////////////////

// function palindrome(str) {
//     return str === str.split('').reduce((reversed, character) => character + reversed, '');

// }

///////////////////////////////////////
// SOLUTION 4
///////////////////////////////////////

// function palindrome(str) {
//     return str.split('').every((character, i) => {
//         //compares the character to the length of string arr -1 bc of 0 index
//         //ie compares the first and last character to see if they are the same
//         return character === str[str.length - i - 1]
//     })

// }