// 1-Activating Strict Mode
'use strict'

let hasDriversLicens = false
const passTest = true

if (passTest) hasDriversLicens = true
if(hasDriversLicens) console.log('u can drive now!')

// const interface = 'audio'

// 2- Function

//function declaration
let x = addition(3, 4);
function addition(a, b){
    console.log("calling the function");
    let c = a + b;
    return c;
}
console.log(x);

// 3-Function Declarations vs. Expressions

//function expression
const b = function(a, b){
    return a * b
}
console.log(b(5, 5));

// 4-Arrow function

const calcAge = birthYear => 2023 - birthYear
const calcAge2 = (birthYear, currentYear) =>{
    return currentYear - birthYear
}

console.log(calcAge(2004));
console.log(calcAge2(2004, 2023));
