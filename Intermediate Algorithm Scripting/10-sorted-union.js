function uniteUnique(arr) {
  
  //Create an empty array store final result
  var finalArray = [];
  
  //Search each array
  for (let i=0; i<arguments.length; i++){
    
    //Search array at hand
    for (let j=0; j<arguments[i].length; j++){
      var indexValue = arguments[i][j];
      
      //Check if array at hand's value is in finalarray
      if(finalArray.indexOf(indexValue)<0){
        finalArray.push(indexValue);
      }
    }
  }
  
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
