// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

// For example:

// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10


function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  if(isbn.length != 10 ){
    return false
  }
  
  
  let acc = 0
  for(let i=0; i<9; i++){
    let multiplier = i+1
    acc += isbn[i] * multiplier
  }
  
  if(isbn[9] == 'X') {
    acc += 100
  } else {
    acc += isbn[9] * 10
  }
  
  
  return acc % 11 === 0
  
}