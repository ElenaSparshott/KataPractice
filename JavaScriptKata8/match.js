// Total amount of points

function calculate (match) {
  let newNum = match.split(':')

    let scoreOne = parseInt(newNum[0])
    let scoreTwo = parseInt(newNum[1])
    console.log(scoreOne)
    
    if (scoreOne == scoreTwo) {
      return 1
    }
    else if (scoreOne > scoreTwo) {
      return 3
    }
    else 
      return 0
}


function points(games) {
  
  let score = 0
  
  for (let m of games) {
    score += calculate(m)
  }   
  return score
}