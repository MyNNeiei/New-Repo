var redlineSync = require('readline-sync')

let num = redlineSync.question('Input number: ');
if(num < 0){ 
    console.log(num ,'is not even or odd number.');
}
else if(num%2 == 0){
    console.log(num ,'is even number.');
}
else{
    console.log(num ,'is odd number.');}