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


// Be Concise I - The Ternary Operator

function describeAge(age) {
    return age < 13 ? "You're a(n) kid"  
    : (age >= 13 && age <= 17) ? "You're a(n) teenager" 
    : (age >= 18 && age <= 64) ? "You're a(n) adult"
    : "You're a(n) elderly";
}


