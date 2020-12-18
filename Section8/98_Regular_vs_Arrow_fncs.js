'use strict';

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

        // Pre-ES6 solution
        const self = this; // self or that
        const isMillenial = function() {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        // Regular call function has this keyword as undefined
        isMillenial();

        // ES6 solution
        // Arrow function uses this keyword from its parent scope
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        // Regular call function has this keyword as undefined
        isMillenial();
    },

    greet: () => {
        // this keyword here is Window object
        // because this is an arrow function
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}
jonas.greet();
jonas.calcAge();

const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);

// Arguments keyword exists only in regular functions
// Not in arrow functions
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}
addArrow(2, 5, 8);