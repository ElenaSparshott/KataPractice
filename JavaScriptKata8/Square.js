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

// Grasshopper - Object syntax debug

var rooms = {
  
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    },
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    },
  },
}
