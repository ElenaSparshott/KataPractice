//Will there be enough space.

function enough(cap, on, wait) {

  if (cap - (on + wait) >= 0) return 0
  return (on + wait) - cap
  
}