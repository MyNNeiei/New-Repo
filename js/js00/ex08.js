var redlineSync = require('readline-sync');

let a = redlineSync.question('Enter days:');
let b = Number(a)/365;
b = Math.floor(Number(b));
let c = Math.abs(((Number(b)*365) - Number(a))/7);
c = Math.floor(Number(c));
let d = Math.abs((Number(a)-(Number(b)*365) + Number(c))*7);
d = Math.floor(Number(d));
console.log(a ,"days = ", b ,"year/s,", c ,"week/s and" , d ,"day/s");