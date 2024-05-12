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

// function isVowel(n) {
//     return "aeiou".includes(n)    
// }

// let isConsonant = l => !isVowel(l)

// function shortcut (s) {
  
//     return s.split('').filter(isConsonant).join('')
// }

// console.log(shortcut("hello"))


function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  
    return birds.filter(isGeese)
};

function isGeese(a) {
  return !["African", "Toulouse", "Pilgrim", 'Roman Tufted', 'Steinbacher'].includes(a)
}

function capitalizeWord(word) {
  
    return  word[0].toUpperCase() + word.slice(1).toLowerCase()
  

}


function xor(a, b) {
  
  if(a == true && b == false) {
    return true
  } else if (a == false && b == true) {
      return true
  } else if (a == false && b == false) {
      return false
  } else if (a == true && b == true) {
      return false
  }
}


function helloWorld() {
  let hello =  "Hello World"
  return hello
}

function add(a,b){
    return a + b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}


function nthEven(n){
  return 2*n - 2
}


function warnTheSheep(queue) {
  if(queue[queue.length-1] == "wolf") {
    console.log("Pls go away and stop eating my sheep")
    return "Pls go away and stop eating my sheep"
  } else {
    let sheep = queue.indexOf("wolf") 
      
    return value =  `Oi! Sheep number ${queue.length - sheep -1}! You are about to be eaten by a wolf!`
  }
}


const flip=(d, a)=>{
  if(d == 'R') {
    return a.sort((a1, b1) => a1 - b1)
  } else {
    return a.sort((a1, b1) => b1-a1)
  }
}


function chromosomeCheck(sperm) {
  console.log(sperm)
  if(sperm == "XY") {
    return "Congratulations! You're going to have a son."
  } else {
    return "Congratulations! You're going to have a daughter."
  }
}

