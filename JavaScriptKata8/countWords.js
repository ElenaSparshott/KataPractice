// Count words

function countWords(str) {
  
  let number = str.trim().split(/\s/)
 
  return number.filter(word => word !== '').length;
  
}