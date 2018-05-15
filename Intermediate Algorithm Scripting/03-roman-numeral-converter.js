// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

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

convertToRoman(2) // should return "II".
convertToRoman(3) // should return "III".
convertToRoman(4) // should return "IV".
convertToRoman(5) // should return "V".
convertToRoman(9) // should return "IX".
convertToRoman(12) // should return "XII".
convertToRoman(16) // should return "XVI".
convertToRoman(29) // should return "XXIX".
convertToRoman(44) // should return "XLIV".
convertToRoman(45) // should return "XLV"
convertToRoman(68) // should return "LXVIII"
convertToRoman(83) // should return "LXXXIII"
convertToRoman(97) // should return "XCVII"
convertToRoman(99) // should return "XCIX"
convertToRoman(500) // should return "D"
convertToRoman(501) // should return "DI"
convertToRoman(649) // should return "DCXLIX"
convertToRoman(798) // should return "DCCXCVIII"
convertToRoman(891) // should return "DCCCXCI"
convertToRoman(1000) // should return "M"
convertToRoman(1004) // should return "MIV"
convertToRoman(1006) // should return "MVI"
convertToRoman(1023) // should return "MXXIII"
convertToRoman(2014) // should return "MMXIV"
convertToRoman(3999) // should return "MMMCMXCIX"
