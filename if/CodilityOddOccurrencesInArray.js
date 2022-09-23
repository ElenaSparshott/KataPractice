// Codility Arrays
// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
// For example, in array A such that:
//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7




// / you can write to stdout for debugging purposes, e.g.
// // console.log(‘this is a debug message’);
// sort array into asending order
// create notPair and pair variable
// for loop to look at each index in the array


function solution(A) {
    const pairs = []
    let notPair = 0
    A.sort((a, b) => a - b)
    // console.log(A)
    for(let i = 0; i < A.length; i++) {
      if(A[i] === A [i + 1]) {
         i++;
         pairs.push(A[i])
         } else {
             notPair = A[i]
         }
        //   console.log(notPair)
   }
   return notPair;
}