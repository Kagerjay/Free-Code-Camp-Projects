function destroyer(arr) {
  // Remove all the values
  var arg = Array.prototype.slice.call(arguments);
 
   return arr.filter(seekDestroy);
  
  function seekDestroy(val) {
    return !arg.includes(val);
  }
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
