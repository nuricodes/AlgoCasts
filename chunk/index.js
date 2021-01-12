// Given an array and chunk size divide the array into many subarrays where each subarray is of lenght size

// pseudo
// create an empty array called chunked
// for each element inside the non chunked array
// retrieve the last element in the chunked array
// if there is no last element (ie array is empty) or if the element length is === to the size
// push a new chunk into chunked with the current element
// else push a current element into the last element in the chunked array
// function chunk(array, size) {
//     let chunked = [];
//     for (let element of array) {
//         let last = chunked[chunked.length - 1]
//         !last || last.length === size ? chunked.push([element]) : last.push(element)
//     }
//     return chunked
// }

// module.exports = chunk;

// Solution 2
function chunk(array, size) {
    let chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, size + index))
        index += size;
    }
    return chunked

}



module.exports = chunk