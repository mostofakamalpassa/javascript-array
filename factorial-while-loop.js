function factorial(number){

    let fact = 1;
    let i = 1;
    while(i <= number){
        fact *= i;

        i++;
    }

    return fact;
}



const getFirstFactorial = factorial(5);


//console.log(getFirstFactorial);



// factorial  decrements 

function factorialWithDecrement(number){

    let i = number;
    let factorial = 1;
    while( i>= 1){
        factorial *= i;

        i--;
    }

    return factorial;

}

const getFact = factorialWithDecrement(5);

console.log(getFact);