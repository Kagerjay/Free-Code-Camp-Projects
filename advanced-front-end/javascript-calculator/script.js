var util = {
  splitNumAndOper: function(rawString){
    // https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript
    // https://stackoverflow.com/questions/49546448/javascript-split-a-string-into-array-matching-parameters
    // '12+345x6/789'   to  [12, +, 345, x, 6, /, 789]

    let splitArray = rawString.match(/\d+|[\+-÷x]/g);
    let assocPropArray = [];
    let isPreviousOperatorMinusSign = false;
    // First Convert Elements into actual Numbers
    splitArray = splitArray.map(function(el){
      if($.isNumeric(el)){
        return parseInt(el);
      } else {
        return el;
      }
    });

    if(splitArray.indexOf("-") > 0){
      // If it has a minus sign, apply associative property
      // [6,"-",4,"-",3] becomes [6,"+", -4, "+", -3]
      // Map does not work here since it relies on previous values
      splitArray = splitArray.map(function(el){
        if(el=="-"){
          el = "+";
          isPreviousOperatorMinusSign = true;
          return el;
        } else if(isPreviousOperatorMinusSign){
          el = parseInt(-el);
          isPreviousOperatorMinusSign = false;
          return el;
        } else { //its a Number or a non(-) operator
          return el;
        }
      });
      return splitArray;
    } else {
      // else its doesn't have minus signs
      return splitArray;
    }
  },
  calculatePartials: function(operator, tempArr){
    const indexStart = tempArr.indexOf(operator)-1;
    const removedArr = tempArr.splice(indexStart,3);
    const firstNum = parseInt(removedArr[0]);
    const secondNum = parseInt(removedArr[2]);
    const calcRes = operations[operator](firstNum, secondNum);

    tempArr.splice(indexStart, 0, calcRes); // push back old result in
    return tempArr;
  },
  exceedDisplay: function(rawString){
    return (rawString.length > 9) ? true : false;
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

var view = {
  display: function(data){
    $('#entry').html(data.storage);
    $('#output').html(data.cache);
    console.log('this storage' , data.storage);
    console.log('this cache', data.cache);
  }
}

const re = /(-|\+|÷|x)/;

var model = {
  pushDot: function(buttonValue, cache){
    return (cache.includes("."))
      ? cache : cache+buttonValue;
  },
  pushNumber: function(buttonValue, cache){
    return cache+buttonValue;
  },
  pushOperator: function(buttonValue, cache){
    return (cache == '' || re.test(cache.slice(-1)))
      ? cache : cache+buttonValue;
  },
  clearAll: function(buttonValue, cache){
    return '';
  },
  clearEntry: function(cache){
    //https://stackoverflow.com/questions/11134004/regex-that-will-match-the-last-occurrence-of-dot-in-a-string/
    // targets last operator +÷x- and its' remaining string .......replaces it with nothing
    // 1. (\+|÷|x|-)     Seek Operators.
    // 2. (?=            Conditional check....
    // 3. [^(\+|÷|x|\-)] For any other operators until end.
    // 4. *$)(.*)/       Grab everything after
    const lastEntry = /(\+|÷|x|-)(?=[^(\+|÷|x|\-)]*$)(.*)/;

    if(re.test(cache.slice(-1))){ // if lastchar is operator
      cache = cache.slice(0,-1); // delete
    } else if(re.test(cache)){ // If string has operator
      cache = cache.replace(selectLastEntry, '$1'); // remove numbers ahead
    } else { // no operators
      cache = '';
    }
    return cache;
  },
  calculate: function(cache){
    let tempArr = util.splitNumAndOper(cache);
    let orderOper = ["x","÷","+","-"]; // PEMDAS

    // TODO catch potential infinite loop errors
    // Disallow operators used before equal sign
    if($.isNumeric(this.storage.slice(-1))){
      while (tempArr.length > 1){
        orderOper.forEach(function(operator){
          while(tempArr.indexOf(operator) > 0){
            util.calculatePartials(operator,tempArr);
          }
        });
      }
      cache = cache + "=" + tempArr.toString();
    }
    return cache;
  }
}

// Display, Read, Update, Destroy
// VIEWS + CONTROLLER IN JQUERY
$(document).ready(function(){
  let cache = '';
  // Condense down into one click button
  $("button").on("click", function(){
    let buttonValue = $(this).attr("value");
    switch(buttonValue) {
      // Numbers
      case '.':
        cache = model.pushDot(buttonValue, cache);
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
        cache = model.pushNumber(buttonValue, cache);
        break;
      case 'x':
      case '÷':
      case '-':
      case '+':
        cache = model.pushOperator(buttonValue, cache);
        break;
      case 'AC':
        cache = model.clearAll(cache);
        break;
      case 'CE':
        cache = model.clearEntry(cache);
        break;
      case '=':
        cache = model.calculate(cache);
        break;
      default:
        console.log('ERROR DEFAULT CASE SHOULD NOT RUN!');
        break;
    }
    view.display(cache);
  });
});

// General Notes
// The final storage array before "=" should resemble ["1", "+", "2"] and process into a func
// 2+4x8 = 34 (PEMDAS)
// but official freecodecamp solution
// shows 2+4+8 = 48
// https://codepen.io/freeCodeCamp/full/rLJZrA
