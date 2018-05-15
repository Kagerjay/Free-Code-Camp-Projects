// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  
  let newArr = [];
  let index = arr.length/size;
  
  for (let i =0; i<index; i++){
    newArr[i] = arr.slice(i*size,(i+1)*size);
  }
  
  console.log(index);
  console.log(newArr);
  
  
  // arr.slice(0,size)
  // arr.slice(size, 2*size);
  // arr.slice(2*size, 3*size);
  // for (let int i =0; i<size/2; i++){
    
  // }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);

chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
