function whatIsInAName(collection, source) {
  
  //Initialize
  var arr = [];
  var numMatches = 0;  

  //Loop through each object in array "collection"
  for (let i=0; i<collection.length; i++){
    numMatches =0;
    
    //Loop each property inside object "source". Count number of matching property+values
    for (let j in source){
      if ((collection[i].hasOwnProperty(j))&&(collection[i][j]==source[j])){
        numMatches++;
      }
    }
    
    //If all source props + values match a collections object
    if(numMatches == Object.keys(source).length){
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], 
{ "a": 1, "b": 2 });
