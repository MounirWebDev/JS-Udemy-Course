'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = '00:00',
    address = 'none',
    starterIndex = 1,
    menuIndex = 1,
  }) {
    console.log(
      `order delivred! ${this.starterMenu[starterIndex]} and ${this.mainMenu[menuIndex]} at ${time} in ${address} `
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderIngrediants1: function (ing1, ing2, ing3) {
    console.log(`Here are your ingrediants: ${ing1},  ${ing2},  ${ing3}`);
  },
};

// 1- Destructuring Arrays
const arr1 = [1, 2, 4, 3400];
let a = arr1[0];
let b = arr1[1];
let [y, x, ...rest] = arr1;
console.log(a, b);
console.log(y, x);
console.log(arr1, rest);

// ***********************
console.log(restaurant.categories);
var [first, second] = restaurant.categories;
console.log(first, second);
var [first, , , fourth] = restaurant.categories;
console.log(first, fourth);
// switching variables
[first, fourth] = [fourth, first];
// let temp = first;
// first = fourth;
// fourth = temp;
console.log(first, fourth);
// receive 2 return values from a function
var [starter, main] = restaurant.order(1, 1);
const orderArray = restaurant.order(1, 1);
console.log(orderArray);
console.log(starter, main);

var nested = [1, 2, [3, 4]];
var [firstVal, , [secondVal, thirdVal]] = nested;
console.log(firstVal, secondVal, thirdVal);

// default values
const [r, c = 1, g] = [1541, ,];
console.log(r, c, g);

// 2- Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restourantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// mutating variables
let o = 5;
let p = 54;
const obj = {
  o: 0,
  p: 2,
};
console.log(o, p);
({ o, p } = obj);
console.log(o, p);
//nested object
const {
  thu: { open: openingThur, close: closingThur },
} = hours;
console.log(openingThur, closingThur);

restaurant.orderDelivery({
  time: 22,
  address: 'cnl milinium',
  starterIndex: 1,
  menuIndex: 1,
});
restaurant.orderDelivery({
  time: 2,
});

// 3- The Spread Operator (...)
const newMenu = [
  'vegetarian',
  ...restaurant.mainMenu,
  'meat',
  ...restaurant.starterMenu,
];
console.log(newMenu);
// iterables: strings, sets, maps, arrays, .NOT OBJECT
let string = 'mounir';
let letters = ['A.', ' ', ...string];
console.log(letters);
console.log(...string);
// console.log(`spelling my name: ${...string} `) HERE IT WON'T WORK CUZ IT'S NOT A PLACE THAT ALLOWS US TO USE VARIABLES SEPARATED BY COMMAS

// const ingredients = [
//   prompt('first ingerdiant: '),
//   prompt('second ingerdiant: '),
//   prompt('third ingerdiant: '),
// ];
// console.log(...ingredients);
// restaurant.orderIngrediants1(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderIngrediants1(...ingredients);

const newRestaurant = { foundedIn: '2020', founder: 'A.Mounir', ...restaurant };
console.log(newRestaurant);

// 4- Rest Pattern and Parameters
const arr = [1, 2, ...[3, 4]]; // spread operator
const [A, B, ...Others] = [1, 2, 3, 4.5, 45]; // rest pattern
const { sat, ...otherWeeks } = restaurant.openingHours;
console.log(sat, otherWeeks);
const add = (...numbers) => {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  console.log(sum);
};
add(1, 2, 3, 6);
const mo = [14187, 654141, 9387490];
add(...mo);

//  5-Short Circuiting (&& and ||)
// '||' it will return the first argument if it's true
console.log(3 || 'johm');
console.log('' || 'me');
console.log(null || undefined);

// restaurant.numGuests = 12;
const guests1 = restaurant.numGuests || 23;
console.log(guests1);

// '&&' it will return the first argument if it's false
console.log(3 && 'johm');
console.log('' && 'me');
console.log(null && undefined);

console.log('hello' && '' && 5454 && null);
console.log('hello' || '' || 5454 || null);

// if (!restaurant.orderPizza) {
//   restaurant.orderPizza = 'pizza has already been ordered';
// }
restaurant.orderPizza || (restaurant.orderPizza = 'pizza has been ordered');
console.log(restaurant.orderPizza);

// 6- The Nullish Coalescing Operator (??)
// nullish ===> null or undifined not including 0, '', etc...

const guests2 = restaurant.numGuests ?? 23;
console.log(guests2);

// 7- Logical Assignment Operators &&= ||= ??=

// ********* Coding Challenge #1 *********

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
game.printGoals = function (...playerNames) {
  console.log(...playerNames);
  console.log(playerNames.length);
};
game.printGoals(...game.scored);
//7
// if (team1 < team2) console.log('team 1 is the winner');
// else console.log('team 2 is the winner');
team1 < team2 && console.log('team 1 is the winner');
team1 > team2 && console.log('team 2 is the winner');

// 8-Looping Arrays: The for-of Loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) console.log(item);
for (const [index, item] of menu2.entries()) {
  console.log(menu2);
  console.log(...menu2.entries());
  // const [a, b] = item;
  // console.log(`${item[0]}: ${item[1]}`);
  console.log(`${index}: ${item}`);
}

// 9-Enhanced Object Literals

const person1 = {
  name: 'Mounir',
  age: 19,
};

const person2 = {
  name: 'Mohammed',
  age: 13,
};
const weeks = ['mon', 'thu', 'fri'];
const persons = {
  // BEFOR ES6
  // person1: person1,
  // person2: person2,

  //ES6
  person1,
  person2,

  // BEFOR ES6
  // calcAge: function ({ age: age1 }, { age: age2 }) {
  //   console.log(age1, age2);
  //   console.log(age1 + age2);
  // },

  //ES6
  calcAge({ age: age1 }, { age: age2 }) {
    console.log(age1, age2);
    console.log(age1 + age2);
  },
  // also we can use expression on properties inside []
  [`the day-${1 + 8}`]: 'string...',
  [weeks[0]]: 'one of the weeks',
};

console.log(persons);
persons.calcAge(persons.person1, persons.person2);

// 10-Optional Chaining (?.)
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekdays) {
  const open = restaurant.openingHours?.[day]?.open ?? 'Cloed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 0) ?? "this method doesn't exist!");
console.log(restaurant.orderNow?.(0, 0) ?? "this method doesn't exist!");

// Arrays
const users = [
  {
    name: 'Mounir',
    email: 'mounirabcire@gmail.com',
  },
];

console.log(users[0]?.name ?? 'User array is empty');
console.log(users[1]?.name ?? 'User array is empty');

// 11-Looping Objects: Object Keys, Values, and Entries
const daysProperties = Object.keys(restaurant.openingHours);
let open = `we are opening ${daysProperties.length} days, `;
for (const day of daysProperties) open += `${day}, `;
console.log(open);

console.log(Object.values(hours));
console.log(Object.entries(restaurant.openingHours));
for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`On ${day}, we open at ${open} and we close at ${close}`);
}

// ********* Coding Challenge #2 *********
//1
for (const [
  playersNamesGoal_index,
  playersNamesGoal_value,
] of game.scored.entries()) {
  console.log(`Goal ${playersNamesGoal_index + 1}: ${playersNamesGoal_value}`);
}
//2
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= Object.values(game.odds).length;
console.log(average);

//3
for (const [key, value] of Object.entries(game.odds)) {
  let teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}
// bonus
const scorers = {};
for (const [, player] of game.scored.entries()) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers)