const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // firstName key
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas?');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstname,lastname,age,job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmetdmann';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friends is called
${jonas.friends[0]}`);