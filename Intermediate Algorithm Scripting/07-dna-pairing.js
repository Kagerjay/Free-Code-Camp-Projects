function pairElement(str) {
  //Initialize Array
  var dnaArr = [];

  //Iterate
  for (let i=0; i<str.length; i++){
    
    //4 possible combinations
    switch (str[i]){
      case "A":
        dnaArr.push(["A","T"]);
        break;
      case "T":
        dnaArr.push(["T","A"]);
        break;
      case "G":
        dnaArr.push(["G","C"]);
        break;
      case "C":
        dnaArr.push(["C","G"]);
        break;
      default:
        console.log("No match DNA chars");
    }
  }
  return dnaArr;
}



pairElement("GCG");
