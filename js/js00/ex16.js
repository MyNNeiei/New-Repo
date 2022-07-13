var redlineSync = require('readline-sync')

let p = redlineSync.question('Enter principle: ')
let r = redlineSync.question('Enter time: ')
let t = redlineSync.question('Enter rate: ')
const c = Number(p)*(((1 + Number(r)/100))**Number(t));
c = c.toFixed(6)
console.log('Simple Interest =',c);