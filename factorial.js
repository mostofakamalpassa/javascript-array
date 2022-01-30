let factorial = 1;


for(var i = 1; i<= 7; i++){
    
    factorial = factorial * i;
}


//console.log(factorial);


function factorials(fact){


    let factorial = 1;


    for(let i = 1; i<= fact; i++){
        
        factorial = factorial * i;
    }

    return factorial;
    
}

console.log(factorials(5));
console.log(factorials(7));
console.log(factorials(9));