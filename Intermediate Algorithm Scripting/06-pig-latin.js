function translatePigLatin(str) {
  var arr=str.split("");
  const vowelArr=["a","e","o","i","u"]; //immutable FP

  //!=-1 because indexOf("e") =2, indexOf("i")=4
  if(vowelArr.indexOf(arr[0])!=-1) {
    //vowels
    arr.push("way");
    str = arr.join("");
  } else {
    //not vowel
    
    //search for first vowel after
    for (let i=0; i<arr.length; i++){
      //Found first vowel
      if(vowelArr.indexOf(arr[i])!=-1){
        arr = arr.slice(i).concat(arr.slice(0,i));
        //arr.push(arr.shift())
        arr.push("ay");
        break;
      }
    }
    
    // arr.push(arr.shift());
    // arr.push("ay");
    str = arr.join("");
  }
  
  return str;
}

translatePigLatin("clonderwater");
