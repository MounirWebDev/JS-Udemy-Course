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

// 5-The call and apply Methods

const person = {
    firstName: 'anyFirstName',
    lastName: 'anyLastName',
    fullName(city, country) {
        console.log(
            `${this.firstName} ${this.lastName} is based in ${city}, ${country}`
        );
    },
};

const person1 = {
    firstName: 'Mounir',
    lastName: 'Abcire',
};
const person2 = {
    firstName: 'Nabil',
    lastName: 'Abed',
};
const person3 = {
    firstName: 'Douaa',
    lastName: 'Anda',
};
const person4 = {
    firstName: 'Ahmed',
    lastName: 'Owan',
};
const fullName = person.fullName;

fullName.call(person1, 'Oran', 'Algiers');
fullName.call(person2, 'Setif', 'Algiers');

// 6-The bind Method
// the bind method return a function it doesn't call the function from the main object
const fullNameFun = fullName.bind(person3);
fullNameFun('Telemcen', 'Algiers');
const p4 = fullName.bind(person4, 'Bijaya', 'Algiers');
p4();

//with event listeners
person.age = 0;
person.increaseAge = function () {
    console.log(this);
    this.age++;
    console.log(this.age);
};
document
    .querySelector('.inc')
    .addEventListener('click', person.increaseAge.bind(person));
// document.querySelector('.inc').addEventListener('click', person.increaseAge); =====>
// here this keyWord return the button element to avoid the probleme we should return a function with bind method specifying this key word in the parameter

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Coding Challenge #1 *********
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join(
                    '\n'
                )}\n(Write option number)`
            )
        );
        console.log(answer);
        //if (answer >= 0 && answer <= 3) this.answers.push(answer);
        answer >= 0 && answer <= 3 && this.answers[answer]++;
        console.log(this.answers);

        this.displayResults('string');
        this.displayResults();
    },
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
    if (type === 'array') {
        console.log(...this.answers);
    } else if (type === 'string') {
        // Poll results are 13, 2, 4, 1
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
};

// 7-Immediately Invoked Function Expressions (IIFE)

(function () {
    console.log('This will never run again');
})();
