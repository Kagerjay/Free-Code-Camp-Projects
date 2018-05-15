function getIndexToIns(arr, num) {
  //Sort array first
  arr = arr.sort((a,b)=> a-b);

  //Counter for position
  var count = 0;
  
  //Determine index 
  for (let i =0; i<arr.length; i++){
    if (num<=arr[i]){
      break;
    }
    count++;
  }
  
  return count;
}

getIndexToIns([5, 3, 20, 3], 5);
