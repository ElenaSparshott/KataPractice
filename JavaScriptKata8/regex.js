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


