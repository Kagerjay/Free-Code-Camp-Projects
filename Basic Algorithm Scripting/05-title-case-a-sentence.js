// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  
  //Lowercase then Seperate to Word Array
  let Arr = str.toLowerCase().split(' ');

  //Uppercase first letter each word
  for (let i = 0; i<Arr.length ; i++){
    Arr[i] = Arr[i].charAt(0).toUpperCase() + Arr[i].substring(1);
  }
  
  //Convert to final output to String
  str = Arr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

titleCase("I'm a little tea pot") // should return a string.
titleCase("I'm a little tea pot") // should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // should return "Here Is My Handle Here Is My Spout".
