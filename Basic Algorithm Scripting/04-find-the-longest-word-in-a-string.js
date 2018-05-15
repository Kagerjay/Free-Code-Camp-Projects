// Return the length of the longest word in the provided sentence.
// Your response should be a number.

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

findLongestWord("The quick brown fox jumped over the lazy dog") // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") // should return 6.
findLongestWord("May the force be with you") // should return 5.
findLongestWord("Google do a barrel roll") // should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") // should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") // should return 19.
