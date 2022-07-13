var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter any number: ');
let b = Math.sqrt(a);
b = b.toFixed(3);
console.log('Square root of 25 =', b);
