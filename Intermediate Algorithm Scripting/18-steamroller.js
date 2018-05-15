// Flatten a nested array. You must account for varying levels of nesting.

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

steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
