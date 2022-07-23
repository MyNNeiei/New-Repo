var redlineSync = require('readline-sync')

let basic = redlineSync.question('Input basic salary of an employee: ');
let hra;
let da;

if (basic <= 10000) {
    hra = Number(20)
    da = Number(80)
    let just = Number(basic) * (Number(hra) / 100)
    let like = Number(basic) * (Number(da) / 100)
    const gross = Number(basic) + Number(just) + Number(like)
    console.log('Gross salary =', gross)
}
else if (10000 < basic < 20000) {
    hra = Number(25)
    da = Number(95)
    let just = Number(basic) * (Number(hra) / 100)
    let like = Number(basic) * (Number(da) / 100)
    const gross = Number(basic) + Number(just) + Number(like)
    console.log('Gross salary =', gross)

}
else {
    hra = Number(30)
    da = Number(95)
    let just = Number(basic) * (Number(hra) / 100)
    let like = Number(basic) * (Number(da) / 100)
    const gross = Number(basic) + Number(just) + Number(like)
    console.log('Gross salary =', gross)
}
