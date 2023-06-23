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
console.log(restaurant.order(1, 1));
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

