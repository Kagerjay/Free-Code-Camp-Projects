function diffArray(arr1, arr2) {
  var arr = [];
  var newArr=[];
  // Same, same; but different.
  arr = arr1.concat(arr2).sort();
  
  newArr = arr.filter(function(x){
    if((arr1.indexOf(x)===-1) || (arr2.indexOf(x)===-1)){
      return x;
    }
  });
 return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
