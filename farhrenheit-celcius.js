function farhrenheitCelcius(farhrenheit){

    let celcius = 32; 
    return  ((farhrenheit - celcius) * 5/9 ).toFixed(6) + " C";

}


console.log(farhrenheitCelcius(33))
console.log(farhrenheitCelcius(30))
console.log(farhrenheitCelcius(40))
console.log(farhrenheitCelcius(50))