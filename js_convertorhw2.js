var inputValue = 0;
var units = "";
var resultValue = 0;

units = prompt("Введіть одиницю виміру(км/кг/год)");
inputValue = prompt("Введіть значення");

    switch(units){
        case("км"):
        resultValue = inputValue*1000;
        alert(resultValue + " " + "м");
        break;
        case("кг"):
        resultValue = inputValue*1000;
        alert(resultValue + " " + "г");
        break;
        case("год"):
        resultValue = inputValue*60;
        alert(resultValue + " " + "хв");
        break;
        default:
            alert("Невірно введені одиниці виміру");
    
}
