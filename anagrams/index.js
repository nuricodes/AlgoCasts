// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function anagrams(stringA, stringB) {
    let charMapA = {}
    let charMapB = {}
    stringA = buildCharMap(stringA, charMapA)
    stringB = buildCharMap(stringB, charMapB)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    } for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true
}
function buildCharMap(string, charMap) {
    string = string.replace(/[^\w]/g, "").toLowerCase()
    string.split("").map(c => charMap[c] ? charMap[c]++ : charMap[c] = 1)
}

module.exports = anagrams;

