// All Star Code Challenge #18

function strCount(str, letter){  
  let counter = 0;
  let splitStr = str.split('')
  
  for(let x of splitStr) {
    if (x === letter) {
      counter += 1
    }
  }
  return counter
}
