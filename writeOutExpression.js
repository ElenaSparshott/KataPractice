// Write out expression!
// the input will always be given as a string, in the following format: number space operator space number; for example: "1 + 3" or "2 - 10"
// the numbers used will be 1 to 10
// the valid operators and the relevant texts are stored in the preloaded dictionary/hash OPERATORS
// invalid operators will also be tested, to which you should return "That's not an operator!"


const numbers = {
  "1":"One",  
  "2":'Two',
  "3":"Three",
  "4":"Four",
  "5":"Five",
  "6":"Six",
  "7":"Seven",
  "8":"Eight",
  "9":'Nine',
  "10":"Ten"
}

function expressionOut(expr) {
  
  let tokens = expr.split(' ') 
  
  if(!(tokens[1] in OPERATORS)) {
    return "That's not an operator!"
  }
    
  let answer =  `${numbers[tokens[0]]} ${OPERATORS[tokens[1]]}${numbers[tokens[2]]}`
  return answer
}
