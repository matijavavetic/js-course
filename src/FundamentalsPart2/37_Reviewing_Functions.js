// Function declaration (fnc can be used before it's declared)
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// Function expression (function value stored in a variable)
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function (no this keyword)
const calcAge = birthYear => 2037 - birthYear;

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} retires in ${retirement} years.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));