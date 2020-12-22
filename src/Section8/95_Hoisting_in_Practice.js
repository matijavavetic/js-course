'use strict';

console.log(me);
console.log(job);
console.log(year);

console.log(addDecl(2,3));
console.log(addExpr(2,3));
// Undefined
//console.log(addArrow)
console.log(addArrow(2,3));

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

if (! numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('Deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);