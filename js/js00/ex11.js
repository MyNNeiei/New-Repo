var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter first angle: ')
let b = redlineSync.question('Enter second angle: ')
let c = 180 - (Number(a)+Number(b))
console.log('Third angle:', c);

