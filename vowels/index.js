// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 3
function vowels(str) {
    let matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

module.exports = vowels;

// Solution 1
// function vowels(str) {
//     let counter = 0;
//     for (let char of str.toLowerCase()) {
//         for (let vowel of 'aeiou') {
//             if (char === vowel) {
//                 counter++
//             }
//         }
//     }
//     return counter
// }

// Solution 2
// function vowels(str) {
//     let counter = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             counter++
//         }
//     }
//     return counter
// }