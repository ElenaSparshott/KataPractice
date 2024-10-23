// // Square

// let squareArea = (A) => (A*2/Math.PI)**2



// // Are arrow functions odd?

// function odds(values){
//   return values.filter( e => e%2 == 1);
// }



// // L1: Bartender, drinks!

// const database = {
//   "Jabroni": "Patron Tequila",
//   "School Counselor":	"Anything with Alcohol",
//   "Programmer":	"Hipster Craft Beer",
//   "Bike Gang Member":	"Moonshine",
//   "Politician":	"Your tax dollars",
//   "Rapper":	"Cristal"
// }

// const lowercaseDatabase = {}
// for (const [key, value] of Object.entries(database)) {
//   lowercaseDatabase[key.toLowerCase()] = value
// }

// function getDrinkByProfession(param){
  
//   let foundValue = lowercaseDatabase[param.toLowerCase()]
  
//   if(foundValue) {
//     return foundValue
//   } else {
//     return "Beer"
//   } 
// }

// // Grasshopper - Object syntax debug

// var rooms = {
  
//   first: {
//     description: 'This is the first room',
//     items: {
//       chair: 'The old chair looks comfortable',
//       lamp: 'This lamp looks ancient'
//     },
//   },
//   second: {
//     description: 'This is the second room',
//     items: {
//       couch: 'This couch looks like it would hurt your back',
//       table: 'On the table there is an unopened bottle of water'
//     },
//   },
// }

// Remove First and Last Character Part Two

function array(string) {
  let a = string.split(",")
  console.log(a)
  if(a.length < 3) {
    return null
  }
  let newArray =  a.slice(1, a.length - 1);
  console.log(newArray)
  let answer = newArray.join(" ")
  return answer
}

// Formatting decimal places #0

function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100;
}


const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
console.log(obj.baz)


// Printing Array elements with Comma delimiters
function printArray(array){
  return array.join()
}


// Parse float
function parseF(s) { 
  let a = parseInt(s) 
  console.log(a)
  if(typeof a === "number") {
    return a
  }
  return null;
}


// Duck Duck Goose
function duckDuckGoose(players, goose) {
  let x = (goose - 1) % players.length 
  let y = players[x]
  return y.name
}


// Heads and Legs

function animals(heads, legs){
  
  if(heads < 0 || legs < 0 || legs > heads * 4) {
    return "No solutions"
  }
  let extraLegs = legs - (heads * 2)
  if(extraLegs %2 != 0 || extraLegs < 0) {
    return "No solutions"
  }
  let cows = extraLegs / 2
  let chickens = heads - cows
  return [chickens, cows]
}