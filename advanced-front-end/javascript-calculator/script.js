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
  //////////// CACLULATOR OPERATIONS //////////
  equals: function(){

  },
  allClear: function(){
    // It should clear cache to 0 and reset
  },
  clearEntry: function(){
  },
  /////////// DISPLAY & RENDER //////////////////
  render: function(){

  },
  flushCache: function(){
    this.cache = "";
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
        // It should have a way to store a stream of numbers temporarily until pushed as a string.
        // It should only have 1 "." at most like decimal numbers, e.g. check if string has "." character

        // Allow only 1 "."
        // By testing if "." is present already when "." button is pressed
        if(!(buttonValue==="." && operations.cache.includes("."))){
          operations.cache = operations.cache + buttonValue;
          console.log(operations.cache);
        }
        break;
      // Operators
      case 'x':
      case '÷':
      case '-':
      case '+':
        console.log('Operator ' + buttonValue);
        // It should push cache into storage when operator is pressed.
        operations.storage.push(operations.cache);
        operations.flushCache();
        console.log(operations.storage);
        break;
      // Other Essentials
      case '=':
        console.log('Essential' + buttonValue);
        break;
      case 'AC':
        console.log('Essential' + buttonValue);
        break;
      case 'CE':
        console.log('Essential' + buttonValue);
        break;
      default:
        console.log('ERROR');
        break;
    }
  });
});

// General Notes
// The final storage array before "=" should resemble ["1", "+", "2"] and process into a func
// 2+4x8 = 34 (PEMDAS)
// but official freecodecamp solution
// shows 2+4+8 = 48
// https://codepen.io/freeCodeCamp/full/rLJZrA
