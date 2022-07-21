var redlineSync = require('readline-sync')

let a = redlineSync.question('Input num1:  ')
let b = redlineSync.question('Input num2:  ')
let c = redlineSync.question('Input num3:  ');
if(a>b && a>c){
    console.log('Maximum = ' , a);
} 
else if(b>a && b>c){
    console.log('Maximum = ' , b);
}
else if(c>a && c>b){
    console.log('Maximum = ' , c);
}
else{
    console.log('error');
}
