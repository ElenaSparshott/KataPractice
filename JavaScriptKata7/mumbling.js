// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function letterSpread(l, n) {
  let x = ""
  x += l.toUpperCase()
  for(let i = 1; i<n; i++){
    x += l.toLowerCase()
  }
  return x
}


function accum(s) {

  let x = letterSpread(s[0], 1)
  
  for(let i=1; i<s.length; i++) {
    let letter = s[i]
    let spread = letterSpread(letter, i+1)
    x += "-" + spread
  }
  return x
}
