// Sum mixed array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  
let result = x.map(function (num) { 
  return parseInt(num, 10); 
});
  
  let sum = result.reduce((a, b) => a + b, 0);
  return sum
}