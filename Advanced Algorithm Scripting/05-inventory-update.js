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
