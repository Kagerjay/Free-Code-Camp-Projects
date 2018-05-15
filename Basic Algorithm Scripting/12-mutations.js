function mutation(arr) {
  
  //Lowercase array keys to store string vars
  var sampleStr = arr[0].toLowerCase();
  var checkStr = arr[1].toLowerCase();
  
  //Test for failure
  for (let i=0; i<checkStr.length; i++){

    if (sampleStr.indexOf(checkStr[i])==-1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
