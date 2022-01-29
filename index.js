var vowel = ['a','i','e','o','u'];
var input = "a";
var letter = input.toLowerCase();
if(letter == vowel[0] || letter == vowel[1] || letter == vowel[2] || letter == vowel[3] ||  letter == vowel[4]){

    console.log(input, " is Vowel");
}else{
    console.log(input , ' is not vowel');
}


var number1 = 10;
var number2 = 40;
var number3 = 30;

if(number1 > number2){
    if(number1> number3){
        console.log(number1 , " Is big");
    }
}else if(number2> number3){
    if(number2> number1){
        console.log(number2 , " Is big");
    }
}else{
    console.log(number3, " is big");
}


// alter navtive methods

if(number1 > number2 && number1 > number3){
    console.log(number1, " is big");
}else if(number2> number3 && number2 > number3){
    console.log(number2, " is big");
}else{
    console.log(number3 , " Is big");
}