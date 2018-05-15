function steamrollArray(arr) {
  var newArr = [];
  var flatten = function(arg){
    if(!Array.isArray(arg)){
      newArr.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]); // call multiple times
      }
    }
  };
  
  arr.forEach(flatten);
  
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
