// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a `shift cipher`. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  //Convert to array simpler to calculate no string immutability
  var newArr = str.split('');
  
  //Loop each array val apply decrypt func
  for (let i =0; i<newArr.length;i++){
    newArr[i]= shiftValues(newArr[i]);
  }
  
  //return answers
  return newArr.join('');
  
  
  //---------------------------------------
  //Decrypt function
  function shiftValues(val){
    
    //Ignore spaces
    if (val.match(/\W/i)) {
      return val;
    }

    //Define shift
    var shift=13;
    
    //Convert to ASCII values
    val=val.charCodeAt(0);

    //Equalize to base 0 index, 'A' of 65 is 0
    val=val-65;
    
    //If val-shift is negative, add 26 so it counts backwards
    if ((val-shift)>=0){
      val=val-shift;
    } else {
      val=val-shift+26;
    }
    
    //Unequalize it now
    val=val+65;
    
    //Convert to Character
    val = String.fromCharCode(val);
    
    return val;
  }
  //-------------------------------------
  
}

rot13("SERR PBQR PNZC");

rot13("SERR PBQR PNZC") // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") // should decode to "FREE PIZZA!"
rot13("SERR YBIR?") // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
