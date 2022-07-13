var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter base: ')
let b = redlineSync.question('Enter exponent: ')
let c = a**b
console.log(a,'^',b ,'=' , c);