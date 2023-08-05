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
