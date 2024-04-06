function drawTriangle(lines, symbol)
{
    for(var i = 1; i <= lines; i++){
        var symbolLine = "";
        for(var j=i; j > 0; j--){
            symbolLine += symbol;
        }
        console.log(symbolLine);
    }
}

function drawTriangle2(lines, symbol){
    var symbolLine = "";
    var iterator = lines;
    do{
        symbolLine += symbol;
        console.log(symbolLine);
        iterator--;

    }while(iterator > 0)
}

drawTriangle(7, "&");
drawTriangle2(8, "@");