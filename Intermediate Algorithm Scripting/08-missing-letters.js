function fearNotLetter(str) {
  //Store first value
  var asciiNumber = str.charCodeAt(0);
  
  //Search each item in array
  for (let i = 0; i<str.length; i++){
    console.log(str.charCodeAt(i));
    console.log(asciiNumber + "Ascii");
    if (asciiNumber !== str.charCodeAt(i)){
      var missingChar = String.fromCharCode(str.charCodeAt(i-1)+1);
      break;
    }
    asciiNumber++;
  }
  return missingChar;
}

fearNotLetter("bcd");
