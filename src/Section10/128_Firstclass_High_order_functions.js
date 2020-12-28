// First-class functions

/*
Js treats functions as first-class citizens
This means that functions are simply values
Functions are just another "type" of object
*/

// Store functions in variables or properties:
const add = (a, b) => a + b;
const counter = {
    value: 23, 
    inc: function() { this.value ++; }
}

// Pass functions as arguments to other functions:
const greet = () => console.log('Hey');
btnClose.addEventListener('click', greet);

// Return functinons from functions
// Call methods on functions
counter.inc.bind(sometotherobject);