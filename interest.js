function getInterst(princeple, total, time){

    if( princeple <= 0  || total <= 0){
        return " place give valid princeple or inrest";
    }
    let interstAmount = total - princeple;

    // interst formula 

    let interstCalculate = (interstAmount * 100 )/ (princeple * time);

    return interstCalculate + " % ";

}


console.log(getInterst(500, 600, 1));
console.log(getInterst(5000, 6000, 2));
console.log(getInterst(4000, 6000, 1));


