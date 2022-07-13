var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter temperature in Celsius: ');
let b = ((Number(a)*9)/5) + 32
b = b.toFixed(2) 
console.log('Temperature in Fahrenheit =', b ,'F');