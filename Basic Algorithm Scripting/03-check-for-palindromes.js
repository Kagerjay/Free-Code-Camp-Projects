function palindrome(str) {
  //Clean up string
  var re = /[^a-z0-9]/gi;
  str=str.toLowerCase();
  str=str.replace(re,'');
  console.log(str);
  
  //Reverse string and check
  var pstr = str.split('').reverse().join('');
  if (pstr === str){
    return true; 
  }
  return false;
}

palindrome("__Eye");
