// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly 
// divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  
  var newArr =[];
  
  //Generate a new array with all subset information
  for (let i =Math.min(...arr); i<=Math.max(...arr); i++){
    newArr.push(i);
  }
  
  //Euclidean Algorithm
  var gcm = newArr.reduce(function(a,b){
    
    let minNum = Math.min(a,b);
    let maxNum = Math.max(a,b);
    var placeHolder = 0;
    
    while(minNum!==0){
        placeHolder = minNum;
        minNum = maxNum % minNum;
        maxNum = placeHolder;
    } 
    
    //here maxNum = GCD(a,b)
    return (a*b)/(maxNum);
  },1);

  return gcm;
}

smallestCommons([1,5]);

smallestCommons([1, 5]) // should return a number.
smallestCommons([1, 5]) // should return 60.
smallestCommons([5, 1]) // should return 60.
smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.
