// Product of Largest Pair
// complexity notation o(logn)

function maxProduct(a) {
  
    let info = {
        max:0,
        secondMax: 0
    }

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



function maxProduct(a) {
  
  let info = {
        max:0,
        secondMax: 0
    }

  function twoMaxNums(acc, i) {
  //acc contains max and secondMax

      if(i > acc.max) {
        acc.secondMax = acc.max
        acc.max = i 
      }else if (i > acc.secondMax){
        acc.secondMax = i
      }
    console.log(acc)
    return acc
  }

  
  let result = a.reduce(twoMaxNums, info)
  return result.max * result.secondMax
  
}

