function sumFibs(num) {
  var sum = 0;
  //Fibbonaci Number
  var a = 0;
  var b = 1;
  var c = 0;
  while (b<=num){
    if (b%2 !==0){
      sum+=b;
    }
    c = a;
    a = b;
    b = a + c;
  }
  console.log(sum);
  return sum;
}

sumFibs(75025);
