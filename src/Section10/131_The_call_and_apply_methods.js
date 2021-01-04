const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`
        ${name} booked a seat on ${this.airline}
        flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'John');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah');

// Works, eurowings parameter explicity tells JS
// that 'this' keyword is eurowings object
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: []
};

book.call(swiss, 212, 'MAry');
console.log(swiss);

// Apply method - does not receive list of arguments, but takes array of data
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);