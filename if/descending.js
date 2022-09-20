// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


function toArrayDigits(n) {
  //return n.toString().split('')
  
  let acc = []
  let temp = n

  while(temp > 0) {
    digit = temp % 10
    acc.push(digit)
    temp = Math.floor(temp / 10)
  }
  
  return acc

}

function arrayToNumber(arr) {
  let value = 0
  for (let i = arr.length - 1, multiplier = 1; i >=0; i--, multiplier *= 10) {
    value += multiplier * arr[i]
  }
  return value
}


function descendingOrder(n){
  if (n == 0) {
    return 0
  }
  
  // use sort
  let numberArray = toArrayDigits(n)
  
  let descendingNumber = numberArray.sort((a,b) => b - a)
  
  //let a = descendingNumber.join('')

  let a = arrayToNumber(descendingNumber)
  
  return parseInt(a)
                         
}   