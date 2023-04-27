// 1- JS Linking File
let js = 'amazing'
//if (js === 'amazing') alert('JS Is Fun')
console.log(10 - 10 + 15 + 100 - 10);

// 2- Values And Variables
let firstName = 'Mounir'
let last_name = 'Abcire'
let $function = 'student'
let _new = 'new'

console.log(firstName, last_name, $function);

const PI = 3.14
const HEIGHT = 20
const WIDTH = 150
let myFirstGame = 'valorant' // game1 = 'valorant'
let mySecondGame = 'PES2023'// game2 = 'PES20023'

// 3- Data Types
let myFirstVar = 10
let mySecondVar;

// there are 7 primitive data types in JS
console.log(typeof myFirstVar);
console.log(typeof 'Mounir');
myFirstVar = false
console.log(typeof myFirstVar);
console.log(typeof mySecondVar);
console.log(typeof null); // this is a bug on JS, his type actuelly is null not an object
//console.log(null instanceof null) ---> return an error
// and 2 others which are: BigInt and Symbol

// 4- Const, Let And Var
let age = 18
age = 19
let empty

const YEAR = 2004

job = 'studen'
var job;
job = 'front end developer'


// 5- Basic Operators
// math operators
const CURRENTLY_YEAR = 2023
let myAge = CURRENTLY_YEAR - 2004

console.log(myAge, myAge + 15, myAge / 50, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 
console.log('Abcire' + ' ' + 'Mounir')
// assignement operators
let x = 10 - 5;
x++
x--
x += 5
x -= 5
x *= 5
console.log(x);
//comparison operators
console.log(x > 5)// >, <, >=, <=

// 6- Operator Precedence
let a, b
a = b = 10 - 5
console.log((7 - 5) * 2);
console.log(7 - 5 * 2);

// **** CODING CHALLENGE #1 ****
let massMark = 78,
    heightMark = 1.69,
    massJohn = 92,
    heightJohn = 1.95

let BMI_mark = massMark / (heightMark * heightMark)
let BMI_john = massJohn / (heightJohn * heightJohn)

let markHigherBMI = BMI_mark > BMI_john

console.log('**** CODE CHALLENGE #1 ****');
console.log('Marks BMI: ' + BMI_mark, 'Johns BMI: ' + BMI_john, markHigherBMI);

massMark = 95
heightMark = 1.88
massJohn = 85
heightJohn = 1.76

BMI_mark = massMark / (heightMark * heightMark)
BMI_john = massJohn / (heightJohn * heightJohn)
markHigherBMI = BMI_mark > BMI_john

console.log('Marks BMI: ' + BMI_mark, 'Johns BMI: ' + BMI_john, markHigherBMI);

// 7- Strings Strings and Template Literals

console.log("I'm " + firstName + ", and I'm " + age + " years old!");
console.log(`I'm ${firstName} and I'm ${age} years old!`)
console.log(`multiple
line 
${1 + 1} lines`)

// 8- If / Else statements
let hour = 18
if (hour >= 18) {
    console.log('Good Afternoon!');
}
else {
    console.log('Good Morning');
}

// **** CODING CHALLENGE #2 ****

if (BMI_john > BMI_mark) {
    console.log('Marks BMI is less than Johns BMI');
}
else {
    console.log('Johns BMI is less then Marks BMI');
}

console.log(`- Johns BMI is ${BMI_john}.
- Marks BMI is ${BMI_mark}.`);

// 9-Type Conversion and Coercion
console.log(Number('1990' + 2));
console.log(Number('mounir', typeof Number('')));
console.log(String(23))
//type coercion
console.log('I am ' + 19 + ' years old');
console.log('100' - '10' - 50 - '20');// * , / (the same)

// 10-Truthy and Falsy Values
// 5 falsy values(they're not false but they'll come false when we want to convert them to boolean): 0, '', NULL, undefined, NaN
console.log(Boolean(NaN))
console.log(Boolean('c'));
console.log(Boolean({}))
let money = 0
if (money) {
    console.log('Good');
} else {
    console.log('Empty');
}

// 11-Equality Operators: == vs. ===
if (age === 19) console.log('adult');
console.log(18 === 18, 18 == '18', 18 === '18', 18 == 18);
let val = Number(prompt('Your Favorite Number Is: '));
console.log(val, `The Type Of The Value Is ${typeof val}`);

// 12- Logical Operators
let A = true
let B = false
console.log(A && B);
console.log(A || B);
console.log(!A && B);
console.log(!A || !B);

// **** CODING CHALLENGE #3 ****
let doliphisScore = (96 + 108 + 89) / 3
let koalasScore = (88 + 91 + 110) / 3

console.log(doliphisScore, koalasScore);
if (doliphisScore > koalasScore) {
    console.log(`The team of dolphin has the highest scocre whith ${doliphisScore}`);
    if (doliphisScore < 100) {
        console.log(`You won ---> dolphine`);
    }
} else if (doliphisScore < koalasScore) {
    console.log(`The team of koala has the highest score whith ${koalasScore}`);
    if (koalasScore < 100) {
        console.log(`You won ---> koala`);
    }
} else {
    console.log(`They have the same score ${koalasScore}`);
    if(doliphisScore >= 100){
        console.log(`Nobody  won`);
    }
}
