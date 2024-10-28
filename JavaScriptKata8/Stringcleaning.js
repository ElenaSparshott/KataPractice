// String cleaning

function stringClean(s){
  return s.replace(/[0-9]/g, '')
}



// Enumerable Magic - Does My List Include This?

function include(arr, item){
  return arr.includes(item)
}


// Multiple of index

function multipleOfIndex(array) {
  
  let myFun = (value, index) => (index == 0 && value === 0) || value % index === 0
  return array.filter(
    myFun
  )
}

function multipleOfIndex(array) {
  return array.filter(
    (value, index) => (index == 0 && value === 0) || value % index === 0
  )
}

const multipleOfIndex = array => array.filter(
    (value, index) => (index == 0 && value === 0) || value % index === 0
)