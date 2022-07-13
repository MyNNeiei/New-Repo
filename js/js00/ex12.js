var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter base of the triangle: ')
let b = redlineSync.question('Enter height of the triangle: ')
let c = (1/2)*Number(a)*Number(b)
c = c.toFixed(0)
console.log('Area of the triangle', c ,'sq. units');