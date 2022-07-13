var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter radius: ')
let b = redlineSync.question('Diameter = ')
console.log('Circumference =', 2*(22/7)*a ,'sq.','units');
console.log('Area =', (22/7)*a*a ,'sq.','units');
