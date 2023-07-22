// Add Length

function transform(s) {
 return  `${s} ${s.length}`
}

function addLength(str) {
  return str.split(" ").map(transform)
}
