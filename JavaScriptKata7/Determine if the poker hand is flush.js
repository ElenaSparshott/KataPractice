// Determine if the poker hand is flush
// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A


function isFlush(cards) {
  
  let newArray = []
  for(let i = 0; i < cards.length; i++){
    const last = cards[i].charAt(cards[i].length - 1);  
      newArray.push(last)
    console.log(newArray)
  }
  
    if(newArray.every((val) => val === newArray[0])){
    return true
  }else{
    return false
  }
}
