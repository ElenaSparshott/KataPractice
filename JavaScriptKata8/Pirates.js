// Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) => {
  let shout = Object.values(gunners)
  if (shout.includes('nay'))
    return 'Shiver me timbers!'
  else 
    return 'Fire!'
}