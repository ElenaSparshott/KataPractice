// Reverse words

function reverseWord(s) {
    return s.split("").reverse().join("")
}

function reverseWords(str) {
  return str.split(" ").reverse().map(reverseWord).join(" ");
}

console.log(reverseWords('The good dog'))
