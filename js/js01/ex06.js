var redlineSync = require('readline-sync')

let cost = redlineSync.question('Input cost price: ');
let sell = redlineSync.question('Input selling price: ');

if( sell>cost ){
    console.log('Profit: ',Number(sell)-Number(cost));
}
else{
    console.log('loss : ' ,Number(cost)-Number(sell))
}