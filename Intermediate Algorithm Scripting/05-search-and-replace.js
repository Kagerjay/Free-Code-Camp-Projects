function myReplace(str, before, after) {
  
  //Capitalize After if before is cap
  if (before[0] === before[0].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  //Regex to grab the value in the word
  var re = new RegExp(before,"g");
  str=str.replace(re, after);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
