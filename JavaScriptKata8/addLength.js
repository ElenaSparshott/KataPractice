// Add Length this has changed the title.

function transform(s) {
 return  `${s} ${s.length}`
}

function addLength(str) {
  return str.split(" ").map(transform)
}

function hello() {
  console.log("hello world")
}


hello = () => "Hello world";


setTimeout(hello, 1000)


class Gamer {
    constructor(name) {
        this.name = name
        this.score = 0
        this.incrementScore = function(){
            this.score++ 
        }
    }
}

const gamer = new Gamer("Dave")

const gamer1 = new Gamer("Ellie")

gamer.incrementScore()
gamer1.incrementScore()
gamer1.incrementScore()
console.log(gamer)
console.log(gamer1)


// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


function createPhoneNumber(n){
  
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
  
}