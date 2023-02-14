// Telephone checker for freeCodeCamp

function telephoneCheck(str) {
  let telephoneNumber = str.trim()

  let regExps = [
    /^\d{10}$/g,
    /^[1]?[\s]?\d{3}-\d{3}-\d{4}$/g,
    /^[1]?[\s]?\d{3}[ ]\d{3}[ ]\d{4}$/g,
    /^[1]?[\s]?\(\d{3}\)[ ]?\d{3}-\d{4}$/g,
  ];

  for(let regExp of regExps) {
    if (telephoneNumber.match(regExp)) {
      return true;
    } 
  }
  return false
} 

telephoneCheck("555-555-5555");