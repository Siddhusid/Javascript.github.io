// hoisting using var datatype
console.log(number); // Output: undefined
var number = 10;
console.log(number); // Output: 10

// hoisting using let datatype
console.log(number); // Output: ReferenceError: Cannot access 'number' before initialization
let number = 10;
console.log(number); // Output: 10

// using const datatype
console.log(number); // Output: ReferenceError: Cannot access 'number' before initialization
const number = 10;
console.log(number); // Output: 10
