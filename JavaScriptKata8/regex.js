// Simple validation of a username with regex

function validateUsr(username) {
  return /^([a-z0-9_]){4,16}$/.test(username)
}



// Calculate Price Excluding VAT

//return price without vat
function excludingVatPrice(price){
  if(price === null) {
    return -1
  }
  return +(price/1.15).toFixed(2) 
}


// Easy Time Convert

function timeConvert(num) { 
  if (num <= 0) {
    return  "00:00"
  }
  
   if(num < 10) {
    return `00:0${num}`
    }  
  
    if(num < 60) {
    return `00:${num}`
    }  
  
    if(num > 60) {
      let a = (num % 60)
      console.log(a)
      if(a < 10) {
        let b = (num - a)
        let c = b/60
        return `0${c}:0${a}`
      } else {
        let b = (num - a)
        let c = b/60
       return `0${c}:${a}`
      }
  } 
}