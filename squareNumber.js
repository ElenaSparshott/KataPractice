// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.


var isSquare = function(n){
  let a = Math.sqrt(n)
  return Number.isInteger(a)
}



let isSquare = function(n) {

  let i = 0
  while(true) {
    let square = i * i
    if(square === n) {
      return true
    }
    if(square > n) {
      return false
    }
    i++
  }
} 