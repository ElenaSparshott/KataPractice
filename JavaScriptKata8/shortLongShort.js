// Short Long Short

function solution(a, b){
  let lengthA = a.length
  let lengthB = b.length

  if(lengthA > lengthB) {
    return `${b}${a}${b}`
  }
  return `${a}${b}${a}`
}
