let arr = ['a', 'b', 'c', 'd', 'e'];

// c, d, e
console.log(arr.slice(2));
// c, d
console.log(arr.slice(2, 4,));
// d, e
console.log(arr.slice(-2));
// e
console.log(arr.slice(-1));
// b, c
console.log(arr.slice(1, -2));
// a, b, c, d, e
console.log(arr.slice());
console.log([...arr]);

// Splice method - mutates original array
arr.splice(-1);
// a, b, c, d
console.log(arr);

// second parameter - number of elements we want to delete
arr.splice(1, 2);
// a, d
console.log(arr);

arr2 = ['j', 'h', 'k'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join - concatenates all elements into a single string
// a - b - c - d...
console.log(letters.join(' - '));