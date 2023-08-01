// Lario and Muigi Pipe Problem

function pipeFix(numbers){
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  
  newArray = []
  for(let i = min; i <= max; i++) {
    newArray.push(i)
  }

  return newArray
}
