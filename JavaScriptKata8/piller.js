// Pillars

function pillars(numPill, dist, width) {
  if(numPill === 0 || numPill === 1) {
    return 0
  } else {
    let distBetween = ((numPill - 1) * dist) * 100
    console.log(distBetween)
    let pillerWidth = (numPill - 2) * width
    console.log(pillerWidth)
    return distBetween + pillerWidth
  }
}
