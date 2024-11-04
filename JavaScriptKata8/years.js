// How old will I be in 2099?

function  calculateAge(birth, year) { 
  if(birth == year) {
      return "You were born this very year!"
  } else if (year - birth > 1) {
      return `You are ${year - birth} years old.`
  } else if (year - birth == 1 ) {
      return `You are ${year - birth} year old.`
  } else if (year - birth == -1) {
      return `You will be born in ${(-year) - (-birth)} year.`
  } else {
      return `You will be born in ${(-year) - (-birth)} years.`
  }
}
