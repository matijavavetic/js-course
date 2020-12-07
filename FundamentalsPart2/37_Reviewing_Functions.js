// Function declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// Function expression
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

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