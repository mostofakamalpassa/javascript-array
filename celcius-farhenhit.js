

function celciusToFarnhit(celcius){

    if(celcius == 0){

        return 32 + " F"
    }

    let farnhit = (celcius * (9/5)) + 32;

    return farnhit.toFixed(1) + " F";

}


console.log(celciusToFarnhit(1));
console.log(celciusToFarnhit(0));
console.log(celciusToFarnhit(20));