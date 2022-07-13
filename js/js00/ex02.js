var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter length: ')
let b = redlineSync.question('Enter width: ')
console.log('Perimeter of rectangle =', (b*2)+(a*2) ,'units');