//Sentence replacement

function capital(s) {
  let newCap = s.charAt(0).toUpperCase()
  return newCap + s.substring(1)
}

function lower(s) {
  let newCap = s.charAt(0).toLowerCase()
  return newCap + s.substring(1)
}

function isUpperCase(c) {
  return c === c.toUpperCase()
}

function myReplace(str, before, after) {

  let words = str.split(' ')

  for(let x of words) {
    if(x === before) {
      let replacement
      if(isUpperCase(x[0])) {
        replacement = capital(after)
      } else {
        replacement = lower(after)
      }
      console.log(replacement)
      let sentence = str.replace(before, replacement);
      console.log(sentence)
      return sentence;
    }
  }
  return str
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");