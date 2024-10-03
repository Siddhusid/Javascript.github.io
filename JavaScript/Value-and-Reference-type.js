// Value Type (Primitive)
let number1 = 10; 
let number2 = number1;
console.log("a:", number1); 
console.log("b:", number2); 

number2 = 20; // Change the value of 'b'
console.log("a:", number1);
console.log("b:", number2); 

// Reference Type (Object)
let obj1 = { name: "Alice" };
let obj2 = obj1;
console.log("obj1:", obj1); 
console.log("obj2:", obj2); 

obj2.name = "Bob";
console.log("obj1:", obj1);
console.log("obj2:", obj2); 

// In value type changes made in one variable does not affect the other variable as it only the value (it remains the same)
// In reference type changes made in one variable does affect the other variable as it does not store the value it stores the address of the variable(It changes the value of the other variable) 