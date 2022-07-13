var redlineSync = require('readline-sync');

let p = redlineSync.question('Enter principle: ');
let r = redlineSync.question('Enter time: ');
let t = redlineSync.question('Enter rate: ');
c = (Number(p)*Number(r)*Number(t))/100
c = c.toFixed(6)
console.log('Simple Interest =',c)
