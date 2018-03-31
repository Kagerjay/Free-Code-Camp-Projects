// Create
// MODEL
var model = {
  cache: '', // current entered data
  storage:'', // current total displayed sequence
  displayEntry: function(){
    $('#entry').html(this.storage);
    $('#output').html(this.cache);
    console.log('this storage' , this.storage);
    console.log('this cache', this.cache);
  },
  pushValues: function(buttonValue){
    // Ignore "0" display value
    if (this.cache   == 0){ this.cache = ''};
    if (this.storage == 0){ this.storage = ''};

    const lastStorageChar = this.storage.slice(-1);
    const lastStorageCharIsOperator = (lastStorageChar == "+" || lastStorageChar == "÷" || lastStorageChar == "x" || lastStorageChar == "-");
    const lastStorageCharIs_NOT_Operator = !lastStorageCharIsOperator;
    const buttonValueIsOperator = (buttonValue == "+" || buttonValue == "÷" || buttonValue == "x" || buttonValue == "-");
    const isNumberOrFirstDot = !(buttonValue==="." && this.cache.includes(".")); // Disallow multiple "."

    if (buttonValueIsOperator){
      if (lastStorageCharIs_NOT_Operator && this.cache !==''){ // Unique operator
        this.cache = buttonValue;
        this.storage = this.storage + buttonValue;
      } else if(lastStorageCharIsOperator){
        // do nothing
      } else {// Operator was pressed after "AC" or at start, so BACKTRACK
        this.cache = 0;
        this.storage = 0;
      }
    } else { // buttonValueIs_NOT_Operator
      if(lastStorageCharIsOperator){
        this.cache = ""; // Set to "" because below code will append data
      }
      if(isNumberOrFirstDot){
        this.cache = this.cache + buttonValue;
        this.storage = this.storage + buttonValue;
      }
    }
  },
  clearEntry: function(){

    if(this.storage == 0){
      return; // exit clearEntry
    }

    // https://stackoverflow.com/questions/11134004/regex-that-will-match-the-last-occurrence-of-dot-in-a-string/
    // targets last operator +÷x- and its' remaining string .......replaces it with nothing
    // 1. (\+|÷|x|-)     Seek Operators.
    // 2. (?=            Conditional check....
    // 3. [^(\+|÷|x|\-)] For any other operators until end.
    // 4. *$)(.*)/       Grab everything after
    const selectLastEntry = /(\+|÷|x|-)(?=[^(\+|÷|x|\-)]*$)(.*)/;
    const hasOperator = (this.storage.includes('+') || this.storage.includes("÷") || this.storage.includes('x') || this.storage.includes('-'));
    const lastStorageChar = this.storage.slice(-1);
    const lastStorageCharIsOperator = (lastStorageChar == "+" || lastStorageChar == "÷" || lastStorageChar == "x" || lastStorageChar == "-");

    if(lastStorageCharIsOperator){
      this.storage = this.storage.slice(0,-1);
    }
    if(hasOperator){
      this.storage = this.storage.replace(selectLastEntry, '$1'); // $1 is +÷x-
    } else {
      this.storage = 0;
    }

    this.cache = 0;

  },
  clearAll: function(){
    this.cache =   0;
    this.storage = 0;
  },
  calculate: function(){
    // https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript
    // https://stackoverflow.com/questions/49546448/javascript-split-a-string-into-array-matching-parameters
    // '12+345x6/789'   to  [12, +, 345, x, 6, /, 789]
    debugger;
    let tempArr = this.storage.match(/\d+|[\+-÷x]/g);
    let orderOper = ["x","÷","+","-"]; // PEMDAS
    while (tempArr.length > 1){
      orderOper.forEach(function(operator){
        while(tempArr.indexOf(operator) > 0){
          util.calculatePartials(operator,tempArr);
        }
      });
    }
    this.cache = tempArr.toString();
  },
}

var util = {
  isOperator: function(value){
    console.log(value);
  },
  calculatePartials: function(operator, tempArr){
    let removedArr = tempArr.splice(tempArr.indexOf(operator)-1,3);
    let firstNum = parseInt(removedArr[0]);
    let secondNum = parseInt(removedArr[2]);
    let calcRes = operations[operator](firstNum, secondNum);
    tempArr.splice(tempArr.indexOf(operator)-1, 0, calcRes); // push back old result in
    return tempArr;
  }

}

// https://stackoverflow.com/questions/5834318/are-variable-operators-possible
// Math library
var operations = {
  'x': function(a,b) { return a*b},
  '÷': function(a,b) { return a/b},
  '+': function(a,b) { return a+b},
  '-': function(a,b) { return a-b},
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
      case 'x':
      case '÷':
      case '-':
      case '+':
        model.pushValues(buttonValue);
        break;
      case 'AC':
        model.clearAll();
        break;
      case 'CE':
        model.clearEntry();
        break;
      case '=':
        model.calculate();
        break;
      default:
        console.log('ERROR DEFAULT CASE SHOULD NOT RUN!');
        break;
    }
    model.displayEntry();
  });
});

// General Notes
// The final storage array before "=" should resemble ["1", "+", "2"] and process into a func
// 2+4x8 = 34 (PEMDAS)
// but official freecodecamp solution
// shows 2+4+8 = 48
// https://codepen.io/freeCodeCamp/full/rLJZrA
