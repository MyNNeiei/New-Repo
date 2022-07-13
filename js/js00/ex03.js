var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter length: ')
let b = redlineSync.question('Enter width: ')
console.log('Perimeter of rectangle =', a*b ,'sq.','units');