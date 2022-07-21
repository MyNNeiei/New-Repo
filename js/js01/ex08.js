var redlineSync = require('readline-sync')

let basic = redlineSync.question('Input basic salary of an employee: ');

if(basic<10000){
    let hra = 20
    let da = 80
    let just = Number(basic) * Number(hra)
    let like = Number(basic) * Number(da)
}
else if (10000<basic<20000){
    let hra = 25
    let da = 95
    let just = Number(basic) * Number(hra)
    let like = Number(basic) * Number(da)
}
else{
    let hra = 30
    let da = 95
    let just = Number(basic) * Number(hra)
    let like = Number(basic) * Number(da)
}
const gross = basic+just+like
gross = gross.toFixed(2)
console.log('Gross salary =' ,gross)