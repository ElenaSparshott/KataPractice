// Hello, Name or World!

function hello(name) {
  
  if(name === '' || !name) {
    return 'Hello, World!'
  }
  
  let firstLetter = name.charAt(0)
  let cap = firstLetter.toUpperCase()
  let endLetter = name.slice(1).toLowerCase();
  let newName = `${cap}${endLetter}`
  
  return `Hello, ${newName}!` ;

}
