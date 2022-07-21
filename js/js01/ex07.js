var redlineSync = require('readline-sync')

let mark1 = redlineSync.question('Input marks of five subjects: ');
let mark2 = redlineSync.question('');
let mark3 = redlineSync.question('');
let mark4 = redlineSync.question('');
let mark5 = redlineSync.question('');
let percent = ((Number(mark1) + Number(mark2) + Number(mark3) + Number(mark4) + Number(mark5)) / 500) * 100
percent = percent.toFixed(2)
console.log('percentage =' , percent)
if( percent>=90 ){
    console.log('Grade A');
}
else if(percent >= 80){
    console.log('Grade B');
}
else if(percent >= 70){
    console.log('Grade C');
}
else if(percent >= 60){
    console.log('Grade D');
}
else if(percent >= 40){
    console.log('Grade E');
}
else{
    console.log('Grade F')
}