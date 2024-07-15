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