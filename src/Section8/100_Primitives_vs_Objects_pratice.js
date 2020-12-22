'use strict';

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const person = {
    firstName: 'Firstname',
    lastName: 'Lastname',
    age: 27
};

const marriedPerson = person;
marriedPerson.lastName = 'Davis';
console.log('Before marriage:', person);
console.log('After marriage:', marriedPerson);

// In the stack, the value only holds the reference
// which we are not actually changing
// We are only changing the underlying code that is stored in heap


// Won't work if declared as const, can't change address memory
// marriedPerson: {};

const person2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'];
};

const personCopy = Object.assign({}, person2);
personCopy.lastName = 'Davis';

personCopy.family.push('Marry');
personCopy.family.push('John');

console.log('Before marriage:', person2);
console.log('After marriage:', personCopy);