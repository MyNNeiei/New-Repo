var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter length in centimeter: ')
console.log('Length in meter =', a/100 ,'m');
console.log('Length in kilometer =', a/100000 ,'km');