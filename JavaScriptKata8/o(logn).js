// Product of Largest Pair
// complexity notation o(logn)

function maxProduct(a) {
  
  let max = 0;
  let secondMax = 0;
  
  for(let n of a) {
    if(n > max) {
      secondMax = max
      max = n    
    }else if (n > secondMax){
      secondMax = n
    }
  }
  return max * secondMax
}

