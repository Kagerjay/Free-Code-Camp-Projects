// Make a function that looks through an array of objects (first argument) and returns 
// an array of all objects that have matching property and value pairs (second argument). 

// Each property and value pair of the source object has to be present in the object from the 
// collection if it is to be included in the returned array.

// For example, if the first argument is `[{ first: "Romeo", last: "Montague" }, 
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, 
// and the second argument is `{ last: "Capulet" }`, then you must return the third object 
// from the array (the first argument), because it contains the property and its value, 
// that was passed on as the second argument.*

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

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) // should return [{ "a": 1, "b": 2, "c": 2 }]
