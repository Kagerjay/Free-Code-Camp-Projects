function findLongestWord(str) {

  //Convert to array to seperate words
  let Arr = str.split(' ');
  
  //Store first word as current longest
  let curLongest = Arr[0];

  //Compare word lengths
  for (let i=0; i<Arr.length; i++){
    if (Arr[i].length >= curLongest.length){
      curLongest = Arr[i];
    } 
  }
  return curLongest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
