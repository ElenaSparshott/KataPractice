// Get row from alphabetical sequence

// Implement a function which takes a number N and returns the N'th row of the sequence below. If the argument is greater than the number of rows in the sequence, then start from the beginning again, e.g. row 27 is the same as row 1.


function getRow(n) {
  n = (n - 1) % 26 
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let letter = alphabet[n]
  
  let start = letter.repeat(n + 1);
  
  start += alphabet.slice(n + 1, 26)
  return start
}