'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * 2) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);

// Cannot skip parameters
// Can skip by setting parameter as undefined
createBooking('LH123', 1000);