function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // this is an average function
  let calcAverage = array => array.reduce((a, b) => a + b) / array.length;

  // This gets the average, should be log O(n) on this method
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
console.log(solution([9, 4, -3, -10]));
