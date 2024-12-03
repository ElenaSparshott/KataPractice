// How old will I be in 2099?

function  calculateAge(birth, year) { 
  if(birth == year) {
      return "You were born this very year!"
  } else if (year - birth > 1) {
      return `You are ${year - birth} years old.`
  } else if (year - birth == 1 ) {
      return `You are ${year - birth} year old.`
  } else if (year - birth == -1) {
      return `You will be born in ${(-year) - (-birth)} year.`
  } else {
      return `You will be born in ${(-year) - (-birth)} years.`
  }
}


// Be Concise I - The Ternary Operator

function describeAge(age) {
    return age < 13 ? "You're a(n) kid"  
    : (age >= 13 && age <= 17) ? "You're a(n) teenager" 
    : (age >= 18 && age <= 64) ? "You're a(n) adult"
    : "You're a(n) elderly";
}



// USD => CNY
const usdcny = usd =>  `${(usd * 6.75).toFixed(2)} Chinese Yuan`


// Is the date today

function isToday(date) {
  const today = new Date();
  return date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
}

// The falling speed of petals

function sakuraFall(v) {
  if(v <= 0) 
    return 0
  return (80 * 5)/v
}

function sakuraFall(v) {
  return v <= 0 ? 0 : (80 * 5)/v
}


// How many stairs will Suzuki climb in 20 years?

function stairsIn20(s){
  
  let q = s.flat()
  
  const initialValue = 0;
  const a = q.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
  );
  
  console.log(a)
  return (a * 20)
}


// Push a hash/an object into array

items = [{a: "b", c: "d"} ]


//Power

function numberToPower(number, power){
  
  let result = 1
  
  for(let i = 1; i <= power; i++) {
    result = result * number
  }
  return result
}


// String Templates - Bug Fixing #5

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}


// Enumerable Magic #1 - True for All?

function all( arr, fun ){
  return arr.every(fun)
}

// Training JS #4: Basic data types--Array

function getLength(arr){
  //return length of arr
  return arr.length
}

function getFirst(arr){
  //return the first element of arr
  return arr[0]
}

function getLast(arr){
  return arr[arr.length - 1]
}

function pushElement(arr){
  var el=1;
  arr.push(el)
  return arr
}

function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}


