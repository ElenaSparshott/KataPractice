// Ceaser Cipher freeCodeCamp

function changeMe(letter) {
  if(letter >= "N") {
    return String.fromCharCode(letter.charCodeAt(0) - 13)
  } else {
    return String.fromCharCode(letter.charCodeAt(0) + 13)
  } 
}

function rot13(str) {
  let newString = "";
  for(let letter of str) {
    if(letter < "A" || letter > "Z") {
      newString += letter;
    } else {
      newString += changeMe(letter)
    }
  }
  
  return newString;
}

console.log(rot13("SERR PBQR PNZC"));