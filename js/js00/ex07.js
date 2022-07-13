var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter temperature in Fahrenheit:')
let b = ((Number(a)-32)/9)*5
b = b.toFixed(2)
console.log('Temperature in Celsius =', b ,'C');