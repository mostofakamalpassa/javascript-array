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


console.log(getFirstFactorial);