// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
function capitalize(str) {
    let words = [];
    for (let char of str.split(" ")) {
        words.push(char[0].toUpperCase() + char.slice(1))
    }
    return words.join(" ")
}

module.exports = capitalize;
// Solution 2
// function capitalize(str) {
//     return str.split(" ").map(n => n.charAt().toUpperCase() + n.slice(1)).join(" ")
// }