// ДЗ 1 Без А

const regexWithoutA = /[^a]{6}/;

console.log(regexWithoutA.test("hhhhyya"));
console.log(regexWithoutA.test("hhhayya"));
console.log(regexWithoutA.test("hhh1yya"));


// ДЗ 2 Параноя
const mailService = /^[\w\.]+@([\w-]+\.)+[\w]{2,4}$/g;
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var newArr = [];

arr.forEach(element => {
    
    if(mailService.test(element.email) && element.email.includes('gmail') && element.email.includes('yahoo')){
        newArr.push(element);
        console.log(element);
    }
});