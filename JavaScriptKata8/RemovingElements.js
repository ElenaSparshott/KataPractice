// Removing Elements

function removeEveryOther(arr){
  let newArray = arr.filter((item, idx) => ((idx + 1) % 2 !== 0))
  console.log(newArray)
  return newArray
}
