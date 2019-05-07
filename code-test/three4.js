function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // edge case if array is empty
  if (!Array.isArray(A) || !A.length) {
    return -1;
  }

  // this is an average function and a var calculated using it
  // should be O(n)
  let calcAverage = array => array.reduce((a, b) => a + b) / array.length;
  let average = calcAverage(A);

  // Set a temp var to store result
  let currentExtreme = 0;
  let extremeIndex = 0;

  // Loop through the array
  for (let i = 0; i < A.length; i++) {
    // Calculate deviation of each element
    let currentDeviation = Math.abs(A[i] - average);
    if (currentExtreme < currentDeviation) {
      currentExtreme = currentDeviation;
      extremeIndex = i;
    }
  }
  return extremeIndex;
  // we return the last extremeIndex value
  // because the array is not sorted
  // and we're not sure if there's a larger value down the line
  // I could have sorted the array before hand
  // but would add O(n*logn) best case with quicksort
  // however with a sorted array
  // you can traverse the last value in array
  // making it O(1) steps afterward
  //
  // This solution right now should be O(n) because
  // we're mapping over the array one time
  // and just checking the next value with previous
  //
  // I forgot to run tests and figured out later that there were errors in my solution before writing
  // all the stuff above
}
console.log(solution([5, 10, 5, 12]));
