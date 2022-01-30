function resultNumber(number){

    if(number >= 90 && number <= 99){
        return "You got  A+";
    }

    if( number >= 80 && number <= 89){

        return " You got A";
    }
    
    if( number >= 70 && number <= 79){

        return " You got A-";
    }
    
    if( number >= 60 && number <= 69){

        return " You got B+";
    }
    
    if( number >= 50 && number <= 59){

        return " You got B";
    }
    
    if( number >= 40 && number <= 49){

        return " You got B+";
    }

    return " you got Fail ";
    
}


console.log(resultNumber(93));
console.log(resultNumber(88));
console.log(resultNumber(70));
console.log(resultNumber(65));
console.log(resultNumber(30));