'use strict';

console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // Window, arrow doesn't get own this keyword
    // Lexical this keyword -> window
    console.log(this);
}

calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function() {
        // this = jonas object
        console.log(this);
        console.log(2037 - this.year);
    }
}

jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// this keyword undefined, not attached to any object
f();