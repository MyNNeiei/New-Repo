
var redlineSync = require('readline-sync');

let a = redlineSync.question('First number : ');
let b = redlineSync.question('Second number : ');
 console.log('sum = ', a+b);
 console.log('Difference =', a-b);
 console.log('Product =', a*b);
 console.log('Quotient =', a/b);
 console.log('Modulus =', a%b);
