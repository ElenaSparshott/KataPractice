const currencyUnit = {
  "ONE HUNDRED":100,
  "TWENTY":20,
  "TEN":10,
  "FIVE":5,
  "DOLLAR":1,
  "QUARTER":0.25,
  "DIME":0.1,
  "NICKEL":0.05,
  "PENNY":0.01, 
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;

  let coinsRequired = ""

  for (let i in currencyValue) {
    if(currencyValue[i][1] <= change){
      coinsRequired += currencyValue[i][0]
    //   console.log(coinsRequired)
    console.log(currencyValue[1][coinsRequired])
      return coinsRequired
    }
  }

  

  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);