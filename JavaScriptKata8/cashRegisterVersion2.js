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

  let change = (cash - price)*100

  let totalCID = 0

  for(let cashInDrawer of cid) {
    totalCID += cashInDrawer[1]*100
  }

  if (change === totalCID) {
    return {status: "CLOSED", change: cid}
  }

  if(change > totalCID) {
    return  {status: "INSUFFICIENT_FUNDS", change: []} 
  }

  let cidReversed = cid.reverse()
  let givenchange = []
  //step through each of the denomination in till
  for(let [denomName, amountInTillInDollars] of cidReversed) {
    let amountInTillInCents = amountInTillInDollars * 100
    // check if change is larger than the currencyUnit and remove from till
    let denomValueInCents = currencyUnit[denomName]
    let notes = 0
    while(change >= denomValueInCents  && amountInTillInCents > 0) {
      change -= denomValueInCents
      amountInTillInCents -= denomValueInCents
      notes += 1
    }
    if(notes > 0) {
      givenchange.push([denomName, (notes*denomValueInCents)/100])
    }
    if(change === 0) {
      return {status: "OPEN", change: givenchange}
    }
  }

  return  {status: "INSUFFICIENT_FUNDS", change: []} 
  
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])