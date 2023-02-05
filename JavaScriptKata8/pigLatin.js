//Pig Latin freecode camp.

function translatePigLatin(str) {

  let vowels = ["a", "e", "i", "o", "u"]
  let firstLetter = str.charAt(0)

  if(vowels.includes(firstLetter)){
     return str.concat('way')
  }
 
   let position = 0
   for (let x of str) {
      if(vowels.includes(x)) {
         break
      }
      position += 1
   }
   let bitBefore = str.substring(0, position)
   let bitAfter = str.substring(position)

   console.log(`${bitAfter}${bitBefore}ay`)

   return `${bitAfter}${bitBefore}ay`
}
  

translatePigLatin("consonant");