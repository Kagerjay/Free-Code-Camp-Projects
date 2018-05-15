function convertToRoman(num) {
  //Numeral Reference
  rom = ["I","V","X","L","C","D","M"];
  
  //Convert to string to number array
  var arr= num.toString().split("").map(Number);
  
  //See image / notes after
  var l = 2*arr.length;

  //Conversions
  for (let i = 0; i<arr.length; i++){
    switch(arr[i]){
      case 0:
        arr[i]="";
        break;
      case 1:
        arr[i] = rom[l-2];
        break;
      case 2:
        arr[i] = rom[l-2]+rom[l-2];
        break;
      case 3:
        arr[i] = rom[l-2]+rom[l-2]+rom[l-2];
        break;
      case 4:
        arr[i] = rom[l-2]+rom[l-1];
        break;
      case 5:
        arr[i] = rom[l-1];
        break;
      case 6:
        arr[i] = rom[l-1]+rom[l-2];
        break;
      case 7:
        arr[i] = rom[l-1]+rom[l-2]+rom[l-2];
        break;
      case 8:
        arr[i] = rom[l-1]+rom[l-2]+rom[l-2]+rom[l-2];
        break;
      case 9:
        arr[i] = rom[l-2]+rom[l];
        break;
      default:
        break;
    }
    l-=2;
  }
  
  return arr.join("");
}
convertToRoman(501);
