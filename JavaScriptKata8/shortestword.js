// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
  
    let count = 99999999
    let newArray = s.split(" ")
    
    for(let i = 0; i < newArray.length; i++) {
     if(newArray[i].length < count){
      count = newArray[i].length
     }      
  }
  return count
}