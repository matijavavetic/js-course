'use strict';

const restaurant = {
    name: 'Clasico Italiano',
    location: 'Via',
    categories: ['1', '2', '3', '4'],
    starterMenu: ['foca', 'brusc', 'garlic'],
    mainMenu: ['pizza', 'pasta', 'rissotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); 
console.log(arr);

const [first, , second] = restaurant.categories;
console.log(first, second); 

/* SWITCHING VARIABLES
const temp = main;
main = second;
second = temp;
console.log(first, second);
*/

[first, second] = [second, first];
console.log(first, second);

const [starter, mainCourse] =
restaurant.order(2, 0);
console.log(starter, mainOrder);

const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

// Nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default vlaues
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);