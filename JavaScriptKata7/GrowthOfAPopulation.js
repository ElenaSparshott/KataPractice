function nbYear(p0, percent, aug, p) {
  
    let acc = p0;
    let year = 0;
  
    while(acc < p){
      let newNumber = (acc * percent/100) + aug;
      console.log(newNumber)
      acc += newNumber
      year += 1;
    }
  return year
}
