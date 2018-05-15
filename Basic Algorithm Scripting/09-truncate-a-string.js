function truncateString(str, num) {

  if (num<3) {
    str=str.slice(0,num);
    str+="...";
    return str;
  } 
  
  if (num >= str.length){
    return str;
  } else {
    str=str.slice(0,(num-3));
    str+="...";
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
