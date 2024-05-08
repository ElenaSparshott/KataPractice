// function solve(s) {
  
//   let regex = /\d+/g;
  
//   let matches = s.match(regex);
//   let numbers = matches.map(i=>Number(i));
//   let maximum = Math.max(...numbers);

//   return maximum;

// };

// function noBoringZeros(n) {
//     let newstring = n.toString()
//   let newNumber = newstring.replace(/0+$/,"" )
  
//   let answer = Number(newNumber)
//   console.log((answer))
//   return answer
// }

// noBoringZeros(145000)

function isVowel(n) {
    return "aeiou".includes(n)    
}

let isConsonant = l => !isVowel(l)

function shortcut (s) {
  
    return s.split('').filter(isConsonant).join('')
}

console.log(shortcut("hello"))
