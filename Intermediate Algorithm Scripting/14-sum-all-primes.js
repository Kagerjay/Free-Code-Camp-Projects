function sumPrimes(num) {
  
  var arr = [];
  var isprime = false;
  
  //1 cannot be prime
  if (num ==1){
    return num;
  }
  
  
  //Check for prime number by assuming its prime unless dividable by any number smaller than itself
  //O(n)^2 runtime omega(n)
  for (let i =2; i<=num; i++){
    
    isprime=true;
    
    for (let j=2; j<i; j++){
      if (i%j==0){
        isprime = false;
      }

      }
    if (isprime){
      arr.push(i);
    }
  }
  console.log(arr);
  return arr.reduce((a,b) => a+b, 0);

}

sumPrimes(977);
