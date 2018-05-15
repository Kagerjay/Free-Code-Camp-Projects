// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

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

fearNotLetter("abce") // should return "d".
fearNotLetter("abcdefghjklmno") // should return "i".
fearNotLetter("bcd") // should return undefined.
fearNotLetter("yz") // should return undefined.
