function buzzfizz(start, end) {
    for(let num=start; num <= end; num++) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log("buzzfizz")
    }else if(num % 3 === 0){
            console.log("fizz")
    }else if (num % 5 === 0){
            console.log("buzz")
        }
        else {
            console.log(num)
        }
    }
}

buzzfizz(0, 100)