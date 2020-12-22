'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
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
  
      order: function(starterIndex, mainIndex) {
          return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },
  
      orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
          console.log(`Order received! ${this.starterMenu[starterIndex]} and
          ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`);
      }
    },
};

const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7,8,9);

const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables in JS: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
// array : "J", "o", "n", "a", "s", " ", "S."
console.log(letters);
// string: 'J o n a s'
console.log(...str);

// Can't use spread operator in template
// console.log(`${...str} Schmedtmann`):

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// SAME AS
restaurant.orderPasta(...ingredients);

// Spread operator works on objects
const newRestaurant = {
    ...restaurant, 
    foundedIn: 1998, 
    founder: 'Giuseppe'
}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
// Different names, different objects
console.log(restaurantCopy.name);
console.log(restaurant.name);