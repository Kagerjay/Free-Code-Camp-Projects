function repeatStringNumTimes(str, num) {
  
  //Positive num only
  if (num <= 0){
    return "";
  }
  
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
