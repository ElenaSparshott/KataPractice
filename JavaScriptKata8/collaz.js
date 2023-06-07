// Collatz

function nextNumber(n){
  if(n % 2 == 0){
    return n/2
  } else {
    return (n * 3) + 1
  }
}



function collatz(n){
  let newList = ""
  
  while(n != 1) {
    newList += n + "->"
    n = nextNumber(n)
  }
  newList += "1"
  return newList
}
