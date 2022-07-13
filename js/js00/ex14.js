var redlineSync = require('readline-sync')

let a = redlineSync.question('Enter marks of five subjects: ')
let b = redlineSync.question('');
let c = redlineSync.question('');
let d = redlineSync.question('');
let f = redlineSync.question('');

const percentage = ((Number(a)+Number(b)+Number(c)+Number(d)+Number(f))*100)/400
let total = Number(a)+Number(b)+Number(c)+Number(d)+Number(f)
const average = (Number(a)+Number(b)+Number(c)+Number(d)+Number(f))/5

console.log('Total :' ,total);
console.log('Average :',average );
console.log('Percentage : ',percentage)