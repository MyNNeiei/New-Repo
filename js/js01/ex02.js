var redlineSync = require('readline-sync')

let num = redlineSync.question('Input num:  ');
if(num<0){
    console.log(num , 'is negative');
}
else if(num = 0 ){
    console.log(num , 'is zero');
}
else{
    console.log(num , 'is positive')
}
