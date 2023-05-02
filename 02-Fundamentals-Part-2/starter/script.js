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

// 5-Functions Calling Other Functions

function myFun(){
    let a;
    return  a = prompt("choose ur number: ");
}

function myFun2(result){
    result = myFun() * myFun()
    console.log(result)
    return result
}

myFun2()

// **** Coding Challenge #1 ****
const calcAverage = (x, y, z) => (x + y + z) / 3
const dolphlinsScore_data1 = calcAverage(44, 23, 71)
const koalasScore_data1 = calcAverage(65, 54, 49)
const dolphlinsScore_data2 = calcAverage(85, 54, 41)
const koalasScore_data2 = calcAverage(23, 34, 27)
console.log("DATA 1")
checkWinner(dolphlinsScore_data1, koalasScore_data1)
console.log("DATA 2")
checkWinner(dolphlinsScore_data2, koalasScore_data2)

function checkWinner(dolphlinsScore, koalasScore){
    if(dolphlinsScore >= (koalasScore * 2)){
        return console.log(`Dophin win (${dolphlinsScore} VS ${koalasScore})`)
    }else if(koalasScore >= (dolphlinsScore * 2)){
        return console.log(`Koala win (${koalasScore} VS ${dolphlinsScore})`)
    }else{
        return console.log("No team wins !")
    }
}
