// Well of Ideas - Easy Version

function well(x){
  let goodCount = 0;
  x.forEach(function(ele) {
    if(ele == "good") {
      goodCount ++;
    }
    console.log(goodCount) 
  })
    if(goodCount == 1 || goodCount == 2){
    return 'Publish!'
    } else if (goodCount > 2) {
      return 'I smell a series!'
    } else {
    return 'Fail!'
  }
}
