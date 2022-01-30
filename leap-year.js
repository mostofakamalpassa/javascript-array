function isleapYear(year){

    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){

        return year + " is leap year";
    }
    return year + " is not leap year";
}


console.log(isleapYear(2024));
console.log(isleapYear(2025));