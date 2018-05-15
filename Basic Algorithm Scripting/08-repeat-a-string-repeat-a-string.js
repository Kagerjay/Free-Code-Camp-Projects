// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  
  //Positive num only
  if (num <= 0){
    return "";
  }
  
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);

repeatStringNumTimes("*", 3) // should return "***".
repeatStringNumTimes("abc", 3) // should return "abcabcabc".
repeatStringNumTimes("abc", 4) // should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) // should return "abc".
repeatStringNumTimes("*", 8) // should return "********".
repeatStringNumTimes("abc", -2) // should return "".
