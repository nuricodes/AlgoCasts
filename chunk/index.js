// Given an array and chunk size divide the array into many subarrays where each subarray is of lenght size

// pseudo
// create an empty array called chunked
// for each element inside the non chunked array
// retrieve the last element in the chunked array
// if there is no last element or if the element length is === to the chunk size
// push a new chunk into chunked with the current element
// else add a current element into the chunk
function chunk(array, size) {
    let chunked = [];
    for (let element in array) {
        let last = chunked[chunked.length - 1];
        !last || last.length === size ? chunked.push([element]) : last.push(element)
    }
    return chunked
}

module.exports = chunk;