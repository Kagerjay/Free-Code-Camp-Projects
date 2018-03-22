// Create
// MODEL
var operations = {
  //////////// MATH OPERATIONS //////////
  storage: [],
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
  },
  clearEntry: function(){
  },
  /////////// DISPLAY & RENDER //////////////////
  render: function(){

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
        console.log('Num ' + buttonValue);
        break;
      // Operators
      case 'x':
      case '÷':
      case '-':
      case '+':
        console.log('Operator ' + buttonValue);
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
