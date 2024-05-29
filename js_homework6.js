//js_homeWork6.1

var someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function myBlend(arr){
    if(arr.length > 1){
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
myBlend(someArr);
console.log(someArr);

//js_homeWork6.2

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(keyValue, objectValue){
    return Object.keys(objectValue).find(key => objectValue[key] === keyValue);

        }

console.log(findValueByKey('Клієнт 2',company));
console.log(findValueByKey('Клієнт 1.2.3',company));
console.log(findValueByKey('Клієнт 1',company));