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
