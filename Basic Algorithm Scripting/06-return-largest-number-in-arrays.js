// 
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // should return [9, 35, 97, 1000000].Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  
  //Combined Array to store result of each largest subarray
  let combinedArr = [];
  
  //Iterate array + child array4
  for (let i=0; i<arr.length;  i++){
    
    //0 is benchmark for comparison
    let curMax = 0;

    //Compare subarray for max value
    for (let j=0; j<arr[i].length; j++){
      if (curMax <= arr[i][j]){
        curMax = arr[i][j];
      }
    }
    
    //Store largest number in new array
    combinedArr[i]=curMax;
  }
  return combinedArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // should return [9, 35, 97, 1000000].
