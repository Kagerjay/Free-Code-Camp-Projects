function sym(args) {
  var initialArray = Array.prototype.slice.call(arguments);
  var combinedTotalArray = initialArray.reduce(symDiff);

  
  // Iterate each element in array,  find values not present in other array, merge but check for duplicates
  function symDiff(arrayOne, arrayTwo){
    var combinedDualArray = [];
    arrayOne.forEach(function(el, i){
      if(!arrayTwo.includes(el) && !combinedDualArray.includes(el)){
        combinedDualArray.push(el);
      }
    });
      
    arrayTwo.forEach(function(el, i){
      if(!arrayOne.includes(el) && !combinedDualArray.includes(el)){
        combinedDualArray.push(el);
      }
    });
    combinedDualArray.sort();
    return combinedDualArray;
  }
  
  return combinedTotalArray;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
