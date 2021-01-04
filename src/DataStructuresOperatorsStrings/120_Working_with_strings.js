'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const airline = 'TAP Air Portugal';

const plane = 'A320';
// Each letter in string is an index
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// index 0 gets the letter B, which is the first element
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

// Gets the position of a letter
console.log(airline.indexOf('r'));
// Gets last occurance of letter 'r'
console.log(airline.lastIndexOf('r'));
// Searching through words is case sensitive
console.log(airline.indexOf('portugal'));

// Result: substring Air Portugal, part 'TAP ' is removed
console.log(airline.slice(4));
// Result: 'Air'
console.log(airline.slice(4, 7));
// Gets the first word before empty space
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// Gets the last two letters
console.log(airline.slice(-2));
// Result: AP Air Portuga
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
// Object
console.log(typeof new String('jonas'));
// String
console.log(typeof new String('jonas').slice(1));