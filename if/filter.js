// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function superArr(x) {
    return Number.isInteger(x)
}

function filter_list(l) {  
//   let newArray = x => Number.isInteger(x);
  let newList = l.filter(superArr)
  return newList
}