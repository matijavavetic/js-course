'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';
            const str = `Oh and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a+b;
            }

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!';
        }
        console.log(str);
        console.log(millenial);
        console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';

calcAge(1991);
console.log(age);