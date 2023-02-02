// Calculate BMI

function bmi(weight, height) {
    
  let theBMI = weight / (height * height)
  
  if(theBMI <= 18.5) {
    return "Underweight"
    }
  else if(theBMI <= 25) {
    return "Normal"
    }
  else if(theBMI <= 30) {
    return "Overweight"
    }
  else
    return "Obese"
}

