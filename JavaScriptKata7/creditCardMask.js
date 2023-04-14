function maskify(cc) {
  
  if(cc.length <= 4) {
    return cc
  }
  
  let howManyHashes = (cc.length - 4)
  newString = "#".repeat(howManyHashes)
  endString = cc.slice(-4);
  return newString + endString
  
}