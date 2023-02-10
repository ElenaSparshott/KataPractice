// DNA array

function pairElement(str) {

  function matchTheBase(b) {
    switch(b) {
    case "A":
      return ["A", "T"];
      break;
    case "T":
      return ["T", "A"];
      break;
    case 'C':
      return ["C", "G"];
      break;
    case "G":
      return ["G", "C"];
      break;
    default:
      return "Error"
  }
}

let dnaArray = []

for(let b of str) {
  dnaArray.push(matchTheBase(b))
}

  return dnaArray;
}