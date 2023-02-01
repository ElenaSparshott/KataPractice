// Largest Elements

function largest(n, array) {
  
  let sorted = array.sort(function(a, b){return b-a})
  let sortedOut = sorted.slice(0, n)
  let resorted = sortedOut.sort(function(a, b){return a-b})
  return resorted;
}

