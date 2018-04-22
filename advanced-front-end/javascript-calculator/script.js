// https://stackoverflow.com/questions/5834318/are-variable-operators-possible
// Math library
var operations = {
  'x': function(a,b) { return b*a},
  '÷': function(a,b) { return b/a},
  '+': function(a,b) { return parseInt(b)+parseInt(a)},
  '-': function(a,b) { return b-a},
}
const isOper = /(-|\+|÷|x)/;

var util = {
  splitNumAndOper: function(rawString){
    // https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript
    // https://stackoverflow.com/questions/49546448/javascript-split-a-string-into-array-matching-parameters
    // '12+345x6/789'   to  [12, +, 345, x, 6, /, 789]

    let splitArray = rawString.match(/\d+|[\+-÷x]/g);
    // First Convert Elements into actual Numbers
    splitArray = splitArray.map(function(el){
      if($.isNumeric(el)){
        return parseInt(el);
      } else {
        return el;
      }
    });

    return splitArray;
  },
  exceedDisplay: function(rawString){
    return (rawString.length > 9) ? true : false;
  },
  shuntyardSort: function(rawArr){
    if(!Array.isArray(rawArr)){
      console.error("shuntyardSort did not receive an Array");
    }

    let valueStack = [];
    let operStack = [];
    let isOperPushReady = false;
    const PEMDAS = {
      "x": 2,
      "÷": 2,
      "+": 1,
      "-": 1
    }

    // Convert infix to PEMDAS postfix
    rawArr.forEach(function(el,index,arr){
      if($.isNumeric(el)){ // We have a number
        valueStack.push(el);
        // Oper always adjacent to left and right num, this accounts for right num
        if(isOperPushReady){
          valueStack = valueStack.concat(operStack.reverse());
          operStack = [];
          isOperPushReady = false;
        }
      } else { // We have an operator
        operStack.push(el);
        // Need at least 2 oper to compare if current operator has higher precedence than previous
        if(operStack.length !== 1 && (PEMDAS[el] > PEMDAS[operStack.slice(-2)[0]])){
          isOperPushReady = true;
        }
      }
    });
    // Push remaining operators onto valuestack
    valueStack = valueStack.concat(operStack);
    return valueStack;
  },
  shuntyardCalc: function(rawArr){
    // Small Helper function for shuntyardCalc
    function findFirstOperator(element){
      return isOper.test(element);
    }

    if(!Array.isArray(rawArr)){
      console.error("shuntyardCalc did not receive an Array");
    }
    let infiniteLoopCounter = 0;
    let index = 0;
    let evalPartial = 0;
    let firstNum = 0;
    let secondNum = 0;
    let op = 0;

    /*
     * Calculate the postfix after Djikstras Shuntyard Sort Algo
     * By finding the first operator index, calculating operand + 2previous values
     * and pushing result back in
     * Repeat until everything is calculated
     */
    while(rawArr.length > 1){
      index = rawArr.findIndex(findFirstOperator);
      firstNum = rawArr.splice(index-1,1);
      secondNum = rawArr.splice(index-2,1);
      op = rawArr.splice(index-2,1);
      evalPartial = operations[op](firstNum, secondNum);
      rawArr.splice(index-2,0, evalPartial);

      infiniteLoopCounter++;
      if(infiniteLoopCounter > 10){
        debugger;
      };
    }

    return rawArr.toString();
  },
  grabLastToken: function(rawStr){
    //https://stackoverflow.com/questions/49546448/javascript-split-a-string-into-array-matching-parameters
    return (rawStr == "" || rawStr == "0.") ? rawStr : rawStr.match(/\d+|[\+-\/x÷]/g).pop();
  }
}

var view = {
  render: function(cache,buttonValue){
    // Use placeholder vars for display to prevent 0 and "" confusion
    let topDisplay = util.grabLastToken(cache);
    let botDisplay = cache;

    if(buttonValue == "CE"){
      topDisplay = 0;
    }
    if(botDisplay == ""){
      botDisplay = 0;
    }
    if(topDisplay == ""){
      topDisplay = 0;
    }
    $('#topDisplay').html(topDisplay);
    $('#botDisplay').html(botDisplay);
    console.log(cache);
    console.log(typeof(cache));
  }
}

var model = {
  getEqualSignAndNumber: function(cache, lastCall){
    return (cache.includes("=")) ? cache.match(/=.*/)[0] : cache;
  },
  pushDot: function(cache, lastCall){
    if (cache == '' || cache.includes("=")){
      cache = "0";
    }
    return (cache.includes("."))
      ? cache : cache+".";
  },
  pushNumber: function(cache,lastCall, buttonValue) {
    // model.reset does not remove "=", it is kept to tell if calculate function was last call made
    return (cache.includes("=")) ? buttonValue : "" + cache+buttonValue;
  },
  pushOperator: function(cache, buttonValue){
    if(cache.includes("=")) {
      cache = cache.substring(1); // remove first "="
    }
    return (cache == '' || isOper.test(cache.slice(-1)))
      ? cache : cache+buttonValue;
  },
  clearAll: function(buttonValue, cache){
    return '';
  },
  clearEntry: function(cache, lastCall){
    //https://stackoverflow.com/questions/11134004/regex-that-will-match-the-last-occurrence-of-dot-in-a-string/
    // targets last operator +÷x- and its' remaining string .......replaces it with nothing
    // 1. (\+|÷|x|-)     Seek Operators.
    // 2. (?=            Conditional check....
    // 3. [^(\+|÷|x|\-)] For any other operators until end.
    // 4. *$)(.*)/       Grab everything after
    const lastEntry = /(\+|÷|x|-)(?=[^(\+|÷|x|\-)]*$)(.*)/;

    if (cache.includes("=")){
      cache = "";
    } else if(isOper.test(cache.slice(-1))){ // if lastchar is operator
      cache = cache.slice(0,-1); // delete
    } else if(isOper.test(cache)){ // If string has operator
      cache = cache.replace(lastEntry, '$1'); // remove numbers ahead
    } else { // no operators
      cache = '';
    }
    return cache;
  },
  calculate: function(cache, lastCall){
    let tempArr = util.splitNumAndOper(cache);

    // Edsger Dijkstra - Shuntyard Algorithm
    tempArr = util.shuntyardSort(tempArr);
    tempArr = util.shuntyardCalc(tempArr);
    cache = cache + "=" + tempArr.toString();
    return cache;
  },
};

// Display, Read, Update, Destroy
// VIEWS + CONTROLLER IN JQUERY
$(document).ready(function(){
  let cache = '';
  let lastCall = '';
  // Condense down into one click button
  $("button").on("click", function(){
    let buttonValue = $(this).attr("value");
    switch(buttonValue) {
      // Numbers
      case '.':
        cache = model.pushDot(cache, lastCall);
        lastCall = "DOT";
        break;
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
        cache = model.pushNumber(cache, buttonValue, lastCall);
        lastCall = "NUM";
        break;
      case 'x':
      case '÷':
      case '-':
      case '+':
        cache = model.pushOperator(cache, buttonValue, lastCall);
        lastCall = "OP";
        break;
      case 'AC':
        cache = model.clearAll(cache, lastCall);
        lastCall = "AC";
        break;
      case 'CE':
        cache = model.clearEntry(cache, lastCall);
        lastCall = "CE";
        break;
      case '=':
        cache = model.calculate(cache, lastCall);
        lastCall = "EQ";
        break;
      default:
        console.log('ERROR DEFAULT CASE SHOULD NOT RUN!');
        break;
    }
    view.render(cache,buttonValue);
  });
});

// General Notes
// The final storage array before "=" should resemble ["1", "+", "2"] and process into a func
// 2+4x8 = 34 (PEMDAS)
// but official freecodecamp solution
// shows 2+4+8 = 48
// https://codepen.io/freeCodeCamp/full/rLJZrA
