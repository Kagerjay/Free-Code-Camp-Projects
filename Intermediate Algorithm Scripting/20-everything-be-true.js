function truthCheck(collection, pre) {
  
  //Disprove it
  var allTrue = true;
  
  //collection is an array of objects, collection[i] is an object
  //Check if each object has property
  for (let i =0; i<collection.length; i++){
    if(!collection[i].hasOwnProperty(pre)){
      allTrue = false;
    }
    
    if(!collection[i][pre]){
      allTrue=false;
    }
  }
  
  
  
  if(collection.length)
  
  return allTrue;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
