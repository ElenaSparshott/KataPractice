// Miles per gallon to kilometers per liter

function converter (mpg) {
  
  let miles = mpg/4.54609188
  
  let kph = miles * 1.609344
  
  let answer = kph.toFixed(2)

  return parseFloat(answer)
}
