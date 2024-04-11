function pad(substirng, symbol, quantity, onBegining){
    var additionSting = "";
    if(onBegining)
    {
        if(substirng.length >= quantity){
            return substirng;
        }
        else{
            for(let i = quantity - substirng.length; i > 0; i--){
                additionSting += symbol;
            }
            return additionSting + substirng;
        }
    }
    else
    {
        if(substirng.length >= quantity){
            return substirng;
        }
        else{
            for(let i = quantity - substirng.length; i > 0; i--){
                additionSting += symbol;
            }
            return substirng + additionSting;
        }

    }
} 


console.log(pad("abc", "*", 5, true));
console.log(pad("abc", "*", 2, true));
console.log(pad("abc", "*", 5, false));
console.log(pad("abc", "*", 3, false));