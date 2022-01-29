var vowel = ['a','i','e','o','u'];
var input = "a";
var letter = input.toLowerCase();
if(letter == vowel[0] || letter == vowel[1] || letter == vowel[2] || letter == vowel[3] ||  letter == vowel[4]){

    console.log(input, " is Vowel");
}else{
    console.log(input , ' is not vowel');
}