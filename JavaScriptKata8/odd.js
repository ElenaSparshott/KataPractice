// odd number counter

function oddCount(n){
  
  let counter = 0;
  
  for(let i = 1; i < n; i++){
    if(i % 2 === 1) {
      counter += 1 
    } 
  } 
  return counter;
}


function oddCount(n){
  return Math.floor(n/2)
}


function mergeArrays(arr1, arr2) {
  let array3 = arr1.concat(arr2);
  
  let newArray = array3
  
  let sortedArray = newArray.sort(function(a, b){return a - b})
  
  let theSet = new Set(sortedArray)
  
  let answer = Array.from(theSet)
  
  return answer

}


function toBinary(n){
  return +n.toString(2);
}


function binToDec(bin) {
   return parseInt(bin, 2)
}


function combat(health, damage) {
  let num =  health - damage
  if(num < 0) {
    return 0
  } else {
    return num
  }
}