// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // we need regex
  // First, we seperate everything by sentences, this includes delimiters (needs to be removed)
  var sentArr = S.match(/[^\.!\?]+[\.!\?]+/g);

  // Map and clean up each item to proper grammatical sentences
  sentArr = sentArr.map(item => {
    // delete delimiters
    item = item.replace(/[.!?]/g, "");
    // delete trailing spaces, and convert sequential spaces to singular
    item = item.trim().replace(/ +/g, " ");
    return item;
  });

  // Next, we count number of spaces. If there's 2 spaces, that means there's 3 words
  var result = 0;
  for (let i = 0; i < sentArr.length; i++) {
    let numWordsInSentence = sentArr[i].split(" ").length;
    if (result < numWordsInSentence) {
      result = numWordsInSentence;
    }
  }
  return result;
}
solution("Forget  CVs..Save time . x x");
