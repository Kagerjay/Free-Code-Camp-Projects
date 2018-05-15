// Return an English translated sentence of the passed binary string.
 
// The binary string will be space separated.

function binaryAgent(str) {
  
  //Splits into an array
  var re = /\s/;
  var newArr=str.split(re)
  var answerArr =[];
  
  //Decimal Conversion
  for (let i=0; i<newArr.length; i++){
    answerArr.push(String.fromCharCode(parseInt(newArr[i],2)));
  }
  
  return answerArr.join('');
  
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Store values in an Array, split by -

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") // should return "I love FreeCodeCamp!"
