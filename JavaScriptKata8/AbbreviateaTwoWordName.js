// Abbreviate a Two Word Name

function abbrevName(name){
  
  let newArray = name.split(" ")
  let firstName = newArray[0]
  let secondName = newArray[1]
  
  let firstInitial = firstName[0].toUpperCase()
  let secondInitial = secondName[0].toUpperCase()
  
  return `${firstInitial}.${secondInitial}`
}