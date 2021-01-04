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

// Apply not used anymore
book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, 'Steven');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('John');
bookEW23('Duni');

// event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application of bind
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(250));