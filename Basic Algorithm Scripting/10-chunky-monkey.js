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
