// Palindrome freeCodeCamp Project One.

function palindrome(str) {
  let stripedString = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();


  let stripedStringJoined = stripedString.split(" ").join("")

  let reveresedString = stripedString.split("").reverse().join("").toLowerCase()

  let reveresedStringJoined = reveresedString.split(" ").join("")

  if(stripedStringJoined === reveresedStringJoined) {
    return true;
  }else{
    return false;
  }

}

palindrome("eye");