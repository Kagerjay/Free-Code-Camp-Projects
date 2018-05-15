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
