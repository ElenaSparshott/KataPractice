// Reverse words

function reverseWords(str) {
  let a = str.split(" ").reverse().join(" ");
  let b = a.split("").reverse().join("");
  return b
}
