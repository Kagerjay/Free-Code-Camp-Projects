// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, 
// moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

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

translatePigLatin("california") // should return "aliforniacay".
translatePigLatin("paragraphs") // should return "aragraphspay".
translatePigLatin("glove") // should return "oveglay".
translatePigLatin("algorithm") // should return "algorithmway".
translatePigLatin("eight") // should return "eightway".
