// Create
// MODEL
var operations = {
  //////////// MATH OPERATIONS //////////
  cache: '', // temp storage for one full float value
  storage: [], // captures main operations before "=" is pressed.
               // E.G ["1","+","2"] would result in 3.
  displayEntry: function(){
    // It should display previous array operators and numbers
    let previousEntries = this.storage.join(" ");

    // Display current string + previously entered values
    if(this.storage.length ===0){
      $('#entry').html(this.cache);
    } else {
      $('#entry').html(previousEntries + " " + this.cache);
    }
    // Display cache
    $("#output").html(this.cache);

    // Display Value
    console.log(this.storage);
    console.log(this.cache);
  },
  pushNumbers: function(buttonValue){
    // Clears operators
    if(this.cache === "x" || this.cache === "÷" || this.cache === "-" || this.cache === "+"){
      this.cache ="";
    }
    // Ignore First 0 on CE or AC
    if(this.cache === 0){
      this.cache = "";
    }
    // Allow only 1 "." by testing if its present already on button press
    if(!(buttonValue==="." && this.cache.includes("."))){
      this.cache = this.cache + buttonValue;
    }
  },
  doOperations: function(buttonValue){
    // Clear Operators
    if(this.cache.length !== 0){
      this.storage.push(this.cache);
      this.storage.push(buttonValue); // push operator
      this.cache=buttonValue;
    }
  },
  doClearing: function(buttonValue){
    // If storage.length = 1, pressing "AC" and "CE" is same thing.
    if(buttonValue == "AC" || this.storage.length===1){
      this.cache="";
      this.storage=[];
      this.cache = 0; // The only time this is 0 is when AC is reset
    } else if(buttonValue == "CE"){
      this.storage.pop();
    } else {
      console.error("This shouldn't be runned!");
    }
  },
  doEquals: function(){
    // PEMDAS
    // ['1','+','1', 'x', '2']   starting point
    // ['1', '+', 'newNumber'] next point
    // newNumber  → end point
    this.storage.push(this.cache);
    this.cache="";
    let s = this.storage;
    let calculation = 0;

    let numberOfTimesRunned = 0;
    while(this.storage.indexOf('x') > 0){
      let indexOfX = this.storage.indexOf('x');
      let number1 = this.storage.slice(indexOfX-1, indexOfX);
      let number2 = this.storage.slice(indexOfX+1, indexOfX+2);
      calculation = number1*number2;
      this.storage.splice(indexOfX-1,3);
      console.log(calculation);
    }

    // Seek Division
  }
}

var utils = {
  addAdjacent : function(index){
    return a+b;
  },
  subtractAdjacent : function(a,b) {
    return a-b;
  },
  multiplyAdjacent: function(a,b){
    return a*b;
  },
  divideAdjacent: function(a,b){
    return a/b;
  }
}

// Display, Read, Update, Destroy
// VIEWS + CONTROLLER IN JQUERY
$(document).ready(function(){

  // Condense down into one click button
  $("button").on("click", function(){
    let buttonValue = $(this).attr("value");
    switch(buttonValue) {
      // Numbers
      case '.':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        operations.pushNumbers(buttonValue);
        break;
      // Operators
      case 'x':
      case '÷':
      case '-':
      case '+':
        operations.doOperations(buttonValue);
        break;
      // Other Essentials
      case 'AC':
      case 'CE':
        operations.doClearing(buttonValue);
        break;
      case '=':
        operations.doEquals();
        break;
      default:
        console.log('ERROR DEFAULT CASE SHOULD NOT RUN!');
        break;
    }
    operations.displayEntry();
  });
});

// General Notes
// The final storage array before "=" should resemble ["1", "+", "2"] and process into a func
// 2+4x8 = 34 (PEMDAS)
// but official freecodecamp solution
// shows 2+4+8 = 48
// https://codepen.io/freeCodeCamp/full/rLJZrA
