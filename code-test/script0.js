function solution(S) {
  // we need regex
  // First, we seperate everything by sentences, this includes delimiters
  var sentArr = S.match(/[^\.!\?]+[\.!\?]+/g);
  // Next, we count number of spaces. If there's 2 spaces, that means there's 3 words
  var result = 0;
  for (let i = 0; i < sentArr.length; i++) {
    console.log(sentArr, "SentArr");
    console.log(sentArr[i].split(" "));
    let numWordsInSentence = sentArr[i].split(" ").length;
    if (result < numWordsInSentence) {
      result = numWordsInSentence;
      console.log(result);
    }
  }
  return result;
}
// solution("We test coders. Give us a try?");
solution("Forget  CVs..Save time . x x");
