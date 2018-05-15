// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities `(in arr1)`. 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array // should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const curInventory = arr1;
    const newInventory = arr2;
    let updatedInventory = [];
    let curTracker = []; // Capture indexes of inclusive currentInventory
    
    // Add all items from newInventory and inclusive currentInventory
    newInventory.forEach(function(newItem){
      let newItemFound = false;
      
      curInventory.forEach(function(curItem, j){
        if (newItem[1] == curItem[1]){
          updatedInventory.push([newItem[0]+curItem[0], newItem[1]]);
          newItemFound = true;
          curTracker.push(j);
        }
      });
      if (!newItemFound){updatedInventory.push(newItem);}
    });
    
    // Adds exclusive items from currentInventory
    curInventory.forEach(function(curItem, k){
      if (!curTracker.includes(k)){
        updatedInventory.push(curItem);
      }
    });
    
    // Sort results A-Z
    updatedInventory.sort(function(a,b){
        if (a[1] < b[1]) {
          return -1;
       }
        if (a[1] > b[1]) {
          return 1;
      }
      return 0;
    });
    return updatedInventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

//The function updateInventory // should return an array.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length // should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) // should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) // should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) // should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
