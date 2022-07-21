var redlineSync = require('readline-sync')

let max = redlineSync.question('Input num1:  ')
let min = redlineSync.question('Input num2:  ')
 if(max > min){
    console.log('Maximum = ',max);
 }else{
    console.log('Maximum = ',min);
 }