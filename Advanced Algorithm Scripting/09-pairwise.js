// Given an array `arr`, find element pairs whose sum equal the second argument `arg` and return the sum of their indices.
// 
// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
// Once an element has been used, it cannot be reused to pair with another.
// 
// For example `pairwise([7, 9, 11, 13, 15], 20)` returns `6`. The pairs that sum to 20 are `[7, 13]` and `[9, 11]`. 
// We can then write out the array with their indices and values.
// 
// | Index | 0 | 1 | 2  | 3  | 4  |
// |-------|---|---|----|----|----|
// | Value | 7 | 9 | 11 | 13 | 15 |
// 
// Below we'll take their corresponding indices and add them.
// 
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return `6`
// ------------------------------------------------------------------

// Loops n array items, store in accumlator the indexed sums. Ignore values used in both currentIndex and index
// ----------- BIG O -----------------
// https://stackoverflow.com/questions/9252891/big-o-what-is-the-complexity-of-summing-a-series-of-n-numbers
// Algorithm-wise, this is the same complexity as summing a series of numbers (or operations)
// bigO is O(n^2)
// if n = 6, the total number of operations is 6+5+4+3+2+1, or n(n+1)/2
// Which is stil O(n^2) dominant term

function pairwise(arr, arg) {
  let usedIndex = []; // Stores indexes of values used and should be ignored
  var test= arr.reduce(function(accumulator, currentValue, currentIndex, array){
    for (let i =currentIndex+1; i<array.length; i++){ // currentIndex+1 since we don't iterate on its current value
      if(!usedIndex.includes(currentIndex) && !usedIndex.includes(i)){ // Ignore used indexes on element loop and paired loop checks.
          if(currentValue + array[i] === arg){
            usedIndex.push(i); // so index is only used once
            return accumulator + currentIndex + i; // Add both paired indexes
          }
      }
    }
    return accumulator;
  },0);
  return test;
}

pairwise([0, 0, 0, 0, 1, 1], 1)

pairwise([1, 4, 2, 3, 0, 5], 7) // should return 11.
pairwise([1, 3, 2, 4], 4) // should return 1.
pairwise([1, 1, 1], 2) // should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) // should return 10.
pairwise([], 100) // should return 0.
