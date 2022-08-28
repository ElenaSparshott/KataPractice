// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {

  //toString to make n a string
  //use split string method (this returns array)
  //use map 
  //use reverse string method
  
  return n.toString().split('').map(Number).reverse()
  }
  

