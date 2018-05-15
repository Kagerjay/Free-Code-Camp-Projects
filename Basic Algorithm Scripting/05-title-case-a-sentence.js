function titleCase(str) {
  
  //Lowercase then Seperate to Word Array
  let Arr = str.toLowerCase().split(' ');

  //Uppercase first letter each word
  for (let i = 0; i<Arr.length ; i++){
    Arr[i] = Arr[i].charAt(0).toUpperCase() + Arr[i].substring(1);
  }
  
  //Convert to final output to String
  str = Arr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
