function solve(s) {
  
  let regex = /\d+/g;
  
  let matches = s.match(regex);
  let numbers = matches.map(i=>Number(i));
  let maximum = Math.max(...numbers);

  return maximum;

};