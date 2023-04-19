// function nbYear(p0, percent, aug, p) {
  
//     let acc = p0;
//     let year = 0;
  
//     while(acc < p){
//       let newNumber = (acc * percent/100) + aug;
//       console.log(newNumber)
//       acc += newNumber
//       year += 1;
//     }
//   return year
// }


function nbYear(p0, percent, aug, p) {
  
  let acc = p0;
  let year = 0;

  while(acc < p) {
    let newNumber = Math.floor(acc * percent / 100) + aug;
    acc += newNumber
    year += 1;
  }
  
  return year
}


