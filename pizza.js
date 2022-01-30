function getPizza(nameFood, qty){
    if(nameFood.toLowerCase() != 'pizza'){

        return " Sorray we can sale only pizza";
    }

    if(qty >= 11){

        return " sorray 10 pizza are left";
    }

    if( qty <= 0){
        return " place input valid quantity";
    }

    let price = 10 * qty;
    
    let messate = " your order is sucessfull   Name : "+ nameFood + " " + " Price =  $"+ price  + " Qty  =  "+ qty; 

    return messate;


}



console.log(getPizza('pizza', 2));
console.log(getPizza('pizza', 11));
console.log(getPizza('pizza', 0));