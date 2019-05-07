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
}
