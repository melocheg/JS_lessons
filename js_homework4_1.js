function myisNaN(args){
    return (args !== args);

    
    /*if( Number.isInteger(args / 1) || Number.isInteger(Number.parseInt(args) / 1 )){
        console.log(false);
    }
    else{
        console.log(true);
    }*/
}
// in comments there are values, that retutned original func.

console.log(myisNaN(NaN)); // true
console.log(myisNaN(undefined)); // true
console.log(myisNaN({})); // true

console.log(myisNaN(true)) // false
console.log(myisNaN(null)); // false
console.log(myisNaN(37)); // false
console.log(myisNaN("37")); // false
console.log(myisNaN("37.37")); // false
console.log(myisNaN("")); // false
console.log(myisNaN(" ")); // false

console.log(myisNaN("37,5")); // true  - my func return false, and I dont get how to fix it

console.log(myisNaN(new Date())); // false

console.log(myisNaN(new Date().toString())); // true
console.log(myisNaN("blabla")); // true
