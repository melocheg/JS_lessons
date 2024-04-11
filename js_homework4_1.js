function myisNaN(args){


    
    if( Number.isInteger(args / 1) || Number.isInteger(Number.parseInt(args) / 1 )){
        console.log(false);
    }
    else{
        console.log(true);
    }
}
// in comments there are values, that retutned original func.

myisNaN(NaN); // true
myisNaN(undefined); // true
myisNaN({}); // true

myisNaN(true); // false
myisNaN(null); // false
myisNaN(37); // false
myisNaN("37"); // false
myisNaN("37.37"); // false
myisNaN(""); // false
myisNaN(" "); // false

myisNaN("37,5"); // true  - my func return false, and I dont get how to fix it

myisNaN(new Date()); // false

myisNaN(new Date().toString()); // true
myisNaN("blabla"); // true
