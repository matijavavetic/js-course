const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove aelements
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('Friend Stevo');
}