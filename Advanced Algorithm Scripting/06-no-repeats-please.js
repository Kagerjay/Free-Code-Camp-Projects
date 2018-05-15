//https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
// and pythontutor.com

// Step1 → Step2 → Step3 → Step4 → print result
// "A"BC → "A"BC → A"B"C → A"B"C → print ABC
// "A"BC → "A"BC → A"B"C → A"C"B → print ACB
// "A"BC → "B"AC → B"A"C → B"A"C → print BAC 
// "A"BC → "B"AC → B"A"C → B"C"A → print BCA 
// "A"BC → "C"AB → C"A"B → C"A"B → print CAB
// "A"BC → "C"AB → C"A"B → C"B"A → print CBA

// Basically, first 2 steps swaps index 0 and index1 
// Last two steps swap index 1 with index 2
// Each permutation takes 4 steps

// Step 1 → look at index0 
// Step 2 → swap with either index0, index1, or index2
// Step 3 → look at index1 
// Step 4 → Swap with either index1 or index 2
// Finally, print result.

function permAlone(str) {
  var re = /(.)\1+/g; // checks repeating letters
  var arr = str.split(''); // easier to iterate as array 
  var perm =[]; // a place to store the permutations
  var arrayLength = arr.length;
  var temp;
  
  
  // Generate all permutations
  function generatePerm(curPerm, curIndex, arrayLength){
    
    if(curIndex === arrayLength){
      perm.push(curPerm.join(''));
    } else {
      for (var i = curIndex; i< arrayLength; i++){
        swap(curIndex, i);
        generatePerm(curPerm, curIndex + 1, arrayLength);
        swap(curIndex, i);  //backtrack
      }
    }
    // Swap currentIndex
    function swap(index1, index2){
      temp = curPerm[index1];
      curPerm[index1] = curPerm[index2];
      curPerm[index2] = temp;
    }
  }
  
  generatePerm(arr, 0,arrayLength);
  
  var filtered = perm.filter(function(el){
    return !el.match(re); // removes duplicates
  });
  return filtered.length;
}

permAlone('aba');
