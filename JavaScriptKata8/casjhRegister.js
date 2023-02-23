let currencyUnit = {
  "ONE HUNDRED":10000,
  "TWENTY":2000,
  "TEN":1000,
  "FIVE":500,
  "ONE":100,
  "QUARTER":25,
  "DIME":10,
  "NICKEL":5,
  "PENNY":1, 
}

function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;

  let totalCID = 0

  for(let cash of cid) {
    totalCID += cash[1]*100
  }

  if(change > totalCID) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (change === totalCID)  {
    return {status: "CLOSED", change: cid}
  } else {
    let theChange = []
    let reversedCid = cid.reverse()
    
    for(let coin of reversedCid) {
       let coinsRequired = [coin[0], 0]
        coin[1]=coin[1]*100
        while(change >= currencyUnit[coin[0]] && coin[1] > 0) {
          console.log(currencyUnit[coin[0]])
          change -= currencyUnit[coin[0]]
          coin[1] -= currencyUnit[coin[0]]
          coinsRequired[1] += currencyUnit[coin[0]]/100
        }
        if(coinsRequired[1]>0) {
          theChange.push(coinsRequired)
          console.log(theChange)
        }
    }
    if(change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: theChange}
  }
} 

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);