const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(this.passengerCount);
    }
}

// A function has access to the variable env of the execution context in which it was created
// Closure: VE attached to the function, exactly as it was at the time and place the function was created
const booker = secureBooking();

booker();
booker();
booker();

// A closure gives a function access to all the variables of its parent function
// even after that parent function has returned
// The function keeps a reference to its outer scope, which preserves to scope chain throughout time