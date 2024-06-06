// odd number counter

function oddCount(n){
  
  let counter = 0;
  
  for(let i = 1; i < n; i++){
    if(i % 2 === 1) {
      counter += 1 
    } 
  } 
  return counter;
}


function oddCount(n){
  return Math.floor(n/2)
}


function mergeArrays(arr1, arr2) {
  let array3 = arr1.concat(arr2);
  
  let newArray = array3
  
  let sortedArray = newArray.sort(function(a, b){return a - b})
  
  let theSet = new Set(sortedArray)
  
  let answer = Array.from(theSet)
  
  return answer

}


function toBinary(n){
  return +n.toString(2);
}


function binToDec(bin) {
   return parseInt(bin, 2)
}


function combat(health, damage) {
  let num =  health - damage
  if(num < 0) {
    return 0
  } else {
    return num
  }
}


function replaceDots(str) {
  return str.replace(/\./g, '-');
}


function dutyFree(normPrice, discount, hol){
  
  let percentage = (discount/100)
  let holidayPrice = normPrice * percentage
  let bottles = Math.floor(hol/holidayPrice)

  return bottles
}


function replace(s){
  let a = s.replace(/[aeiou]/gi, "!")
  return a
}


function hexToDec(hexString){ 
  let a = parseInt(hexString, 16)
  return a
}


function main (verb, noun) {
    return verb + noun
}


function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}


function formatMoney(amount){
  let a  = `$${amount.toFixed(2)}`
  return a
}


function take(arr, n) {
  return arr.splice(0, n)
}


function correctTail(bod, tail){
  
  sub = bod.substr(bod.length-(tail.length))
  
  if (sub = tail) {
    return true
  }
  else {
    return false
  }
}

function correctTail(body, tail){
  
  sub = body.substr(body.length-(tail.length))
  
  if (sub == tail) {
    return true
  }
  else {
    return false
  }
}


function getSize(width, height, depth) {
  let volume = width*height*depth
  let area = 2 * (width*height + width*depth + height*depth)
  return [area, volume]
}


function howManyDalmatians(number) {
  
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ?  dogs[3] : dogs[2] 
}


function apple(x){
  
  if(x**2 >1000){
    return "It's hotter than the sun!!"
  } else{
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }
}


function cubeChecker(volume, side){
  let sides = Math.cbrt(volume)
  if(side == 0) {
    return false
  } else if(Math.sign(side) == -1) {
    return false
  } else if(side == sides){
    return true
  } else {
    return false
  }
}


function cubeChecker(volume, side){

  return Math.sign(side) > 0 && (side**3 == volume)
    
}


function generateRange(min, max, step){
    return Array.from(
    { length: (max - min) / step + 1 },
    (value, index) => min + index * step
    );
}


function findAverage(nums) { 
  let total = 0;
  for (let n of nums) {
    total += n; 
  }
  return total/nums.length
}


function multiply(number){ 
    if(Math.sign(number) == -1) {
      let a = number.toString().length - 1
      let b = 5**a
      return b*number
    } else {
    let fives = 5**number.toString().length 
    return fives * number
  }
}


function combineNames(first, last) {
  return `${first} ${last}`
}

websites.push("codewars")


var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
   let dad = d1 + a2 +d2
  return dad
}
function Bee(){
  
  return `${b1}${e2}${e2}`
}
function banana(){
  return `${b2}${a2}${n2}${a2}${n2}${a2}`
}

//answer some questions if you finished works above
function answer1(){
 
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}


function calculateTip(amount, rating) {
  
  switch(rating.toUpperCase()) {
      case "TERRIBLE":
        return 0
      
      case "POOR":
        return Math.ceil(amount * 0.05)
      
      case "GOOD":
        return Math.ceil(amount * 0.1)
      
      case "GREAT":
        return Math.ceil(amount * 0.15)
      
      case "EXCELLENT":
        return Math.ceil(amount * 0.2)
      
      default:
        return"Rating not recognised"
  }
}


function ifChuckSaysSo(){
  return !true
}


function reverseSlice(str) {
  let arr = []
  let reveresedStr = str.split("").reverse().join("");
  for(let i = 0; i < reveresedStr.length; i++) {
    let number = reveresedStr.slice(i, reveresedStr.length)
    arr.push(number)
  }
  return arr
}


Object.freeze(MrFreeze)


const isReallyNaN = (val) => {
  return Number.isNaN(val)  
};


function myFirstKata(a, b) {
  
  if(typeof(a) == "string") {
    return false;
  } else if (typeof(b) == "string") {
    return false;
  } else if (a == true)  {
    return false;
  } else if (typeof(a) == true || typeof(a) == false) {
    return false;
  } else if (typeof(b) == true || typeof(b) == false)  {
    return false;
  } else if (Number.isNaN(a)) {
    return false;
  } else if (Number.isNaN(b)) {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}


var templateStrings = function(noun, adjective) {
  return `${noun} are ${adjective}`
}


function isDigit(s) {
  if(parseFloat(s) == s) {
    return true
  } else {
    return false
  }
}


function validate(username, password){
  var database = new Database();
  if(password.includes("||")) {
    return "Wrong username or password!"
  } 
  return database.login(username, password);
}


function sixToast(num) {
  return Math.abs(num - 6)
}


function getASCII(c){
  return c.charCodeAt()  
}


const message = exceriseTimeMins < 30 ? "Try harder" : "Well done!"
console.log(message)



