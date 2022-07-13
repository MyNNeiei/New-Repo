/**Calculate 2 Numbers Program */

var redlineSync = require('readline-sync');

let first = redlineSync.question('Input first number : ');
let second = redlineSync.question('Input second number : ');
let sum = Number(first) + Number(second);
 console.log(`sum = ${sum}`);