let variable1 = 10;
let variable2 = 30;
let variable3 = 50;


for(let i = 1; i <= 100; i++){
    console.log(i);
}

let index = 50; 

while(index <80){

    if(index % 2 != 0){
        console.log(index);
    }
    index++;
}


function addThree(num1, num2, num3){

    let result = num1+ num2+ num3;

    return result;
}


console.log(addThree(4,5,6));