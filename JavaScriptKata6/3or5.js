// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)


function solution(number){
  let x = 0
  for (let i = 3; i < number; i+=3) {
    x += i
  }
  for (let i = 5; i < number; i+=5) {
    if(i % 3 !== 0 ){
     x += i
    }
  } 
  return x
}
