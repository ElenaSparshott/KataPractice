// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor){
  let newArray = []
  for(let i of numbers) {
    if(i % divisor === 0) {
      newArray.push(i)
    }     
  }
  return newArray
}
