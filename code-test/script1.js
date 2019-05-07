// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // we need regex
  // First, we seperate everything by sentences, this includes delimiters (needs to be removed)
  var sentArr = S.match(/[^\.!\?]+[\.!\?]+/g);
  // Next we clean up each sentence. Remove trailing spaces. Convert multiple sequential spaces to one
  sentArr = sentArr.map(item => {
    return item.trim().replace(/ +/g, " ");
  });
  // Next we clean up any edge cases "Save time ." should be "Save time."

  console.log(sentArr);
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
