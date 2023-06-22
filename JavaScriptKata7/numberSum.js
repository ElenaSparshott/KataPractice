// Summing a number's digits

function sumDigits(number) {
  let num = number.toString()
  let splitup = num.split('')
  let numbers = splitup.map(Number)
  let sumarray = numbers.filter(Boolean)
  
  const sum = sumarray.reduce((partialSum, a) => partialSum + a, 0);

  return sum
}
