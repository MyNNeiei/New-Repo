var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter side of the equilateral triangle ')
const b = Math.sqrt(3)
let c = (Number(b)/4)*(Number(a)**2)
c = c.toFixed(2)
console.log('Area of equilateral triangle =', c ,'sq. units');