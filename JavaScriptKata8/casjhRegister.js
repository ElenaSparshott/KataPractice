let currencyUnit = {
  "ONE HUNDRED":10000,
  "TWENTY":2000,
  "TEN":100,
  "FIVE":50,
  "DOLLAR":10,
  "QUARTER":25,
  "DIME":10,
  "NICKEL":5,
  "PENNY":1, 
}



function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  

   let coinsRequired = ""
   let totalCID = 0

  for(let cash of cid){
    totalCID += cash[1]*100
  }

  if(totalCID > change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (totalCID == change)  {
    return {status: "CLOSED", change: totalCID}
  } else {

  }


  return change;
} 

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);