// Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


function findDifference(a, b) {

  let sumA = a.reduce((c, d) => c * d)
  let sumB = b.reduce((c, d) => c * d)
  
  let answer = (sumA - sumB)
  
  return answer
}


function findDifference(a, b) {

  let sumA = a.reduce((total, value, index, arr) => total * value)
  let sumB = b.reduce((total, value) => total * value)
  
  let answer = sumA - sumB
  
  
  return answer < 0 ? -answer : answer

}

function findDifference(a, b) {
  
  let [x, y, z] = a

  let sumA = x * y * z
  let sumB = b.reduce((total, value) => total * value)
  
  let answer = sumA - sumB
  
  
  return answer < 0 ? -answer : answer

}


