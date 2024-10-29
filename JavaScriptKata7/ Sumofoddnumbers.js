// Sum of odd numbers

function rowSumOddNumbers(n) {
	let row = 1
  let num = 1
  
  while(row < n) {
    for (let i = 0;  i < row; i++) {
      num += 2
    }
    row++
  }   
  console.log(num)
  let total = 0
  for(let i = 0; i < n; i++) {
    total += num 
    num += 2
  }
  return total;
}
