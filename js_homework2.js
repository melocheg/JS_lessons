var age = prompt("Напишіть, будь-ласка, скільки вам років");
age = parseInt(age);
if(age > 0){
    switch(true){
        case(age >=150):
        	alert("Це не можливо");
            break;
        case (age > 10 && age < 20):
            alert(age + " " + "років");
            break;
        case (age % 10 > 1 && age % 10 < 5):
            alert(age + " " + "роки");
            break;
        case (age % 10 === 1):
            alert(age + " " + "рік");
            break;
        
      default:
        alert(age + " " + "років");
    }
}
else{
    alert("Введіть коректні дані");
};
