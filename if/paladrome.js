// Is it a palindrome?

// loop or regex?

// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
  let re = /[^A-Za-z0-9]/g;
  let lowRegStr = x.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
