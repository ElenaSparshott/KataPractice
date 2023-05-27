// Be Concise IV - Index of an element in an array

function find(array, element) {
  let counter = 0;
  for (let x of array) {   
    if (x === element) {
      return counter;  
    }
    counter += 1;
  }
  return "Not found";
}

function find(a, e) {
  let n = a.indexOf(e)
  return n >=0 ? n : "Not found";
}