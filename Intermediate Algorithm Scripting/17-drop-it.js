function dropElements(arr, func) {
  // Loop through Array
  var newArr = arr.filter(func);
  return newArr.length==0 ? newArr : arr.slice(arr.indexOf(newArr[0]),arr.length);
  // var newArr=arr.slice(arr.findIndex(func),arr.length);
  // return newArr.length ==0 ? 1 : newArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });
