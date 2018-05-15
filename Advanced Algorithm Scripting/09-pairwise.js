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
