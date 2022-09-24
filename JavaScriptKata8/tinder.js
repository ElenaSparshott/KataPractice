// Tinder for Programmers


const rateProfile = (profile, swipeLeft, swipeRight) => {
  if(profile.bio.includes("JavaScript")) {
    return swipeRight()
     }else{
    return swipeLeft()
  }
};