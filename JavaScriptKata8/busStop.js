// busStops

function number(busStops){
  let acc = 0;
  
  for(let num of busStops){
    acc += (num[0] - num[1])
  }
  return acc
}


function sum(acc, i) {
  return acc + i;
}

function number(busStops){ 
  return busStops.map(([on, off]) => on - off).reduce(sum)
}