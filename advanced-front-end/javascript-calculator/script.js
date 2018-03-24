// Create
// MODEL
var operations = {
  //////////// MATH OPERATIONS //////////
  cache: '', // temp storage for one full float value
  storage: [], // captures main operations before "=" is pressed.
               // E.G ["1","+","2"] would result in 3.
  add : function(a,b){
    return a+b;
  },
  subtract : function(a,b) {
    return a-b;
  },
  multiply: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  },
  displayEntry: function(){
    // It should display previous array operators and numbers
    let previousEntries = this.storage.join(" ");

    // Display current string + previously entered values
    if(this.storage.length ===0){
      $('#entry').html(this.cache);
    } else {
      $('#entry').html(previousEntries + " " + this.cache);
    }
    console.log(this.storage);
    console.log(this.cache);
  },
  pushNumbers: function(buttonValue){
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
    if(this.cache.length !== 0){
      this.storage.push(this.cache);
      this.storage.push(buttonValue); // push operator
      this.cache="";
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
