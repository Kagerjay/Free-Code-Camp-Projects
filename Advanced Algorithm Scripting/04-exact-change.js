// Design a cash register drawer function `checkCashRegister()` that 
// accepts purchase price as the first argument `(price`), 
// payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

// `cid` is a 2D array listing available currency.

// Return the string `"Insufficient Funds"` if cash-in-drawer is less than the change due. 
// Return the string `"Closed"` if cash-in-drawer is equal to the change due.

// Otherwise, return change in coin and bills, sorted in highest to lowest order.

// function checkCashRegister(price, cash, cid) {
    
    function giveChange(change, cid){
      const currencyReference = {
        "ONE HUNDRED": 100.00,
        "TWENTY": 20.00,
        "TEN": 10.00,
        "FIVE": 5.00,
        "ONE": 1.00,
        "QUARTER" : 0.25,
        "DIME" : 0.10,
        "NICKEL": 0.05,
        "PENNY" : 0.01,
      };
      
      let changeLeftOver = change;
      let changeReturned = [];
      

      // Iterate backwards in cid
      cid.slice().reverse().forEach(function(el) {
        debugger;
        let billType = el[0];
        let billTypeTotalValue = el[1];
        let billValue = currencyReference[billType];
        let billQuantity = billTypeTotalValue / billValue;
        let billReceived = 0;
        
        while (changeLeftOver >= billValue && billQuantity > 0){
          changeLeftOver = Math.round((changeLeftOver - billValue)*100)/100;
          billQuantity--;
          billReceived++;
        }
        
        if(billReceived > 0){
          changeReturned.push([billType, billReceived * billValue]);
        }
     });
     console.log(changeLeftOver);
     
     if (changeLeftOver !==0){ return "Insufficient Funds";}
      return changeReturned;
    }
  
  if (cash > price){
    const change = cash - price;
    const totalCid = cid.reduce(function (accumulator, currentValue){
      return Math.round(10*(accumulator+currentValue[1]))/10 ; // round nearest tenth
    },0);
    
    if (change>totalCid){ return "Insufficient Funds";} 
    else if (change === totalCid){ return "Closed";} 
    else { return giveChange(change, cid);}
  }
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) // should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) // should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return "Closed".
