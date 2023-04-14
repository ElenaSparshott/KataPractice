function findNextSquare(sq) {

  let root = Math.sqrt(sq)

  if(root % 1 === 0){
    let newRoot = root + 1
    return Math.pow(newRoot, 2)
  }
  return -1;
}