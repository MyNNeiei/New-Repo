var redlineSync = require('readline-sync')

let year = redlineSync.question('Input year: ');
if(year%100 !== 0 && year%4 == 0){
    console.log( year ,'is leap year')
}
else{
    console.log(year ,'is not leap year')
}