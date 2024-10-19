// Square

let squareArea = (A) => (A*2/Math.PI)**2



// Are arrow functions odd?

function odds(values){
  return values.filter( e => e%2 == 1);
}



// L1: Bartender, drinks!

const database = {
  "Jabroni": "Patron Tequila",
  "School Counselor":	"Anything with Alcohol",
  "Programmer":	"Hipster Craft Beer",
  "Bike Gang Member":	"Moonshine",
  "Politician":	"Your tax dollars",
  "Rapper":	"Cristal"
}

const lowercaseDatabase = {}
for (const [key, value] of Object.entries(database)) {
  lowercaseDatabase[key.toLowerCase()] = value
}

function getDrinkByProfession(param){
  
  let foundValue = lowercaseDatabase[param.toLowerCase()]
  
  if(foundValue) {
    return foundValue
  } else {
    return "Beer"
  } 
}
