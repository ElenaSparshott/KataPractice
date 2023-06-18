// Triangular Treasure


// Return the nth triangular number
function triangular( n ) {
  if(n < 0) {
    return 0
  }
  let number = (n * (n+1)) / 2
  return number
}