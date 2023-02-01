// Calculate average

function find_average(array) {
  // empty array return 0
  //average = add numbers in array and divide by how many there are (index)
    let total = 0;
    for(let x of array) {
        total += x;  
    }
    let average = total/array.length
    return average
  }
  