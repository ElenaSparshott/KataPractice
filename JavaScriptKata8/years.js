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



// USD => CNY
const usdcny = usd =>  `${(usd * 6.75).toFixed(2)} Chinese Yuan`


// Is the date today

function isToday(date) {
  const today = new Date();
  return date.getDate() == today.getDate() &&
      date.getMonth() == today.getMonth() &&
      date.getFullYear() == today.getFullYear()
}

// The falling speed of petals

function sakuraFall(v) {
  if(v <= 0) 
    return 0
  return (80 * 5)/v
}

function sakuraFall(v) {
  return v <= 0 ? 0 : (80 * 5)/v
}


