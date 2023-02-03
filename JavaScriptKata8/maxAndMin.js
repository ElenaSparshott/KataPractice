// Find Maximum and Minimum Values of a List

let min = function(list){
    let sorted = list.sort(function(a, b){return a-b})
    console.log(sorted[0])
    return sorted[0];
}

let max = function(list){
    let sorted = list.sort(function(a, b){return b-a})
    console.log(sorted[0])
    return sorted[0];
}