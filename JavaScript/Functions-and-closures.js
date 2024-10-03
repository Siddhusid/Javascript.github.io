// single function and closures
function createCounter() {
    let count = 0; 
    return function() {
        count=count+1;
        console.log("Current count: " + count);
    };
}
let counter = createCounter();
counter();
counter();
counter();

//multiple functions and closures
// Outer function
function createCounter() {
    let count = 0; 
    return function() {
        count=count+1;
        return count;
    };
}

let counterA = createCounter();
let counterB = createCounter();
console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterB());
