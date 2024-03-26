//console.log('number' + 3 + 3);
// number33 - конкатинація через строку 'number'

//console.log(null + 3);
// 3 - додавання null привело до 0

//console.log(5 && "qwerty");
//qwerty - у випадку порівняння не булевих значеннь виводить останне значення порівняння

//console.log(+'40' + +'2' + "hillel");
//42hillel - спочатку було арифметичне додавання потім конкатинація

//console.log('10' - 5 === 6);
//false - NaN завжди віддає false

//console.log(true + false);
//1 - приведення булевих значеннь до чисел true = 1

//console.log('4px' - 3);
//NaN - спроба арифметичних дій між строкою і числом

//console.log('4' - 3);
//1 - приведення строки до числа і арифметична дія

//console.log('6' + 3 ** 0);
//61 - конкатинація строки 6 до 3 в степені 0

//console.log(12 / '6');
//2 - приведення строки до числа і арифметична дія

//console.log('10' + (5 === 6));
//10false - конкатинація булевого значення до строки 

//console.log(null == '');
//false - у порівнянні є null

//console.log(3 ** (9 / 3));
//27 - 3 в степені 3

//console.log(!!'false' == !!'true');
//true - обидві строки привело до true, так як вони не пусті. Подвійне заперечення !! нічого не змінює

//console.log(0 || '0' && 1);
//1 - тобто true у данному логічному порівнянні. true АБО(||) true(не пуста строка true і число 1 теж true)

//console.log((+null == false) < 1);
//false - у порівнянні є null 

//console.log(false && true || true);
//true - true АБО(||) fasle = true

//console.log(false && (false || true));
//false - спочатку true АБО(||) fasle = true, потім false і(&&) true = false

//console.log((+null == false) < 1 ** 5);
//false - у порівнянні є null