function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // this is an average function
  let calcAverage = array => array.reduce((a, b) => a + b) / array.length;

  // This gets the average, should be log O(n) on this method
  let average = calcAverage(A);

  // Loop through the array
  for (let i = 0; i < A.length; i++) {
    // Calculate deviation of each element
    let deviation = Math.abs(A[i] - average);
    console.log(deviation);
  }
}
console.log(solution([1, 2, 3, 4]));
