var redlineSync = require('readline-sync')

let num = redlineSync.question('Input number:  ');
if(num/5 && num/11){
    console.log(num , 'is divisible by 5 and 11.')
}
else{
    console.log(num , 'is not divisible by 5 and 11.')
}