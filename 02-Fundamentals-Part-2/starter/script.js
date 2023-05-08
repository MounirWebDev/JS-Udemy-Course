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

// function myFun(){
//     let a;
//     return  a = prompt("choose ur number: ");
// }

// function myFun2(result){
//     result = myFun() * myFun()
//     console.log(result)
//     return result
// }

//myFun2()

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

// 6- Arrays

const numbers = [20, 3, 58];
console.log(numbers, numbers[0], numbers[numbers.length - 1]);
numbers[numbers.length] = 0
//numbers = [0, 57, 'm'] ----> error

const names = new Array("mounir", "ilhem", "mohammed")
console.log(names);

// 7-Arrays Method
//add
numbers.push("mounir");
numbers.unshift("12");
console.log(numbers);
//remove
names.pop();
names.shift();
console.log(names);

console.log(numbers.indexOf(20));
console.log(numbers.indexOf('20'));
console.log(numbers.includes(20));
console.log(numbers.includes('20'));

// 8-Introduction To Object
let myAge = 19; 
const person = {
    firstName: "Mounir",
    lastName: "Abcire",
    currentAge: 2023 - myAge,
    freinds: ['ahmed', 'ilyes'],
    fullName: function(){
        console.log(this);
        return `My name is ${this.firstName + ' ' +this.lastName}`
    }
}

// **** Coding Challenge #2 ****

const calcTip = (value) =>{
    return (value >= 50) && (value <= 300) ?  (value * 0.15) :  (value * 0.20)
}
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])] 
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2]+ tips[2]]
console.log(tips, bills, total);

// 9- Dot Vs. Brocket
person.nationality = 'Algerian'
console.log(`My names is ${person.firstName}, I am ${person.currentAge}, My best freind called ${person.freinds[0]}`);


// 10- Object Methods
console.log(person.fullName());

// **** Coding Challenge #3 ****
const markBMI = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.79,
    calcBMI: function(){
        return this.BMIValue = this.mass / this.height ** 2
    }
}
const johnBMI = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMIValue = this.mass / this.height ** 2
        return this.BMIValue;
    }
}
console.log('Mark info');
console.log(markBMI, markBMI.calcBMI());
console.log('John info');
console.log(johnBMI, johnBMI.calcBMI());

markBMI.BMIValue > johnBMI.BMIValue ? console.log(`Mark's BMI (${markBMI.BMIValue}) is higher than John's BMI (${johnBMI.BMIValue})`) : 
console.log(`John's BMI (${johnBMI.BMIValue}) is higher than Mark's BMI (${markBMI.BMIValue})`);

// 11- Iteration: The for Loop
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 12-Looping Arrays, Breaking and Continuing
const years = [2004, 2003, 1989, 1999, 1975, 1980]
const ages = []
const CURRENT_YEAR = 2023;

for(let i = 0; i < years.length; i++){
    ages.push(CURRENT_YEAR - years[i]) // more cleaner
    // ages[i] = CURRENT_YEAR - years[i];
}

console.log(ages);

for(let i = 0; i < 10; i++){
    if( i === years.length) continue; // 6
    if (i === 8) break;
    console.log(i);
}

// 13-Looping Backwards and Loops in Loops
console.log(ages);
for(let i = ages.length - 1; i >= 0; i--){
    console.log(ages[i]);
}

for(let exo = 1; exo < 4; exo++){
    for(let que = 1; que < 3; que++){
        console.log(`Exersice number ${exo} question number ${que}`);
    }
}

// 14-The while Loop

let rep = prompt('enter your age')
while(!rep){
    rep = prompt('enter your age');
}

// **** Coding Challenge #4 ****

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips2 = []
const total2 = []
const calcTip2 = (value) =>{
    return (value >= 50) && (value <= 300) ?  (value * 0.15) :  (value * 0.20)
}
const calcAvrage2 = (arr)=>{
    let avr = 0;
    for(let i = 0; i < arr.length; i++){
        avr = avr + arr[i]
    }
    return avr / arr.length;
}
for(let i = 0; i < bills2.length; i++){
    tips2.push(calcTip2(bills2[i]));
    total2.push(bills2[i] + tips2[i]);
}
console.log(bills2);
console.log(tips2);
console.log(total2);
console.log(calcAvrage2(total2))