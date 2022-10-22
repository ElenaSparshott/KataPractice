// mumbling

function letterSpread(l, n) {
  let x = ""
  x += l.toUpperCase()
  for(let i = 1; i<n; i++){
    x += l.toLowerCase()
  }
  return x
}


function accum(s) {

  return s.split("").map((l, i) => letterSpread(l, i+1)).join("-")

}




