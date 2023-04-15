function addToAverage(current, points, add) {
  let total = current * points;
  
  let newTotal = total + add
  
  let newAverage = newTotal/(points + 1)
  
  return newAverage
}
