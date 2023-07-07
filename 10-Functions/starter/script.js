'use strict';

// 1-Default Parameters
const addition = function (a = 0, b = 0, c = a + b) {
    // ES5
    // a = a ?? 0;
    // b = b ?? 0

    console.log(a, b, c);
    console.log(c);
};

addition(5, 6);

// 2-How Passing Arguments Works: Values vs. Reference
let number = 23;
let myObj = {
    fullName: 'Mounir ABCIRE',
    age: 19,
};

function valuesRefrenceFun(num, obj) {
    num = 12;
    obj.fullName = 'Mr.' + obj.fullName;
}

valuesRefrenceFun(number, myObj);
console.log(number, myObj);
// Is the same as doing...
const num = number; // num is a copy of number it will not change the original;
const obj = myObj; //obj is not a copy of myObj both are the same object any changes happen to obj will change myObj, objectes addressed by reffrence not by value

// 3-Functions Accepting Callback Functions
const upperFirstWord = function (str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return str.replace(firstWord, firstWord.toUpperCase());
};
const oneWord = function (str) {
    return str.replaceAll(/ /g, '').toLowerCase();
};
const transformer = function (str, callbackFun) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${callbackFun(str)}`);
    console.log(`Transformed by: ${callbackFun.name} Function`);
};

transformer('JavaScript is the best programming language!', upperFirstWord);
transformer('JavaScript is the best programming language!', oneWord);

// 4-Functions Returning Functions
const greet = greeting => name => console.log(`${greeting}  ${name}`);

greet('Good Morning')('Mr. Mounir ABCIRE');
const greeter = greet('Good Afternoon');
greeter('Mr. Ali');

