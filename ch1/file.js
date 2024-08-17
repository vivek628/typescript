"use strict";
const numElement1 = document.getElementById('1');
const numElement2 = document.getElementById('2');
const btn = document.querySelector('button');
const numarry = [];
const stringarr = [];
function sum(num1, num2) {
    if (typeof num1 == 'string' && typeof num2 == 'string') {
        return num1 + " " + num2;
    }
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    return +num1 + +num2;
}
function printresult(resultobj) {
    console.log(resultobj.val);
}
btn.addEventListener('click', () => {
    const num1 = numElement1.value;
    const num2 = numElement2.value;
    const numresult = sum(+num1, +num2);
    numarry.push(numresult);
    const stringresult = sum(num1, num2);
    stringarr.push(stringresult);
    console.log(numresult);
    printresult({ val: numresult, time: new Date() });
});
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("i am good");
    }, 2000);
});
p1.then((result) => {
    console.log(result.split(' '));
});
