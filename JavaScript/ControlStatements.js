// 1.if, else if, else statements
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even.");
} else if (number % 2 !== 0) {
    console.log(number + " is odd.");
} else {
    console.log("Invalid input.");
}

// 2.For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// 3.For Each Loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log("Number: " + number);
});

// 4.While Loop
let count = 0;
console.log("While loop:");
while (count < 3) {
    console.log("Count is " + count);
    count++;
}

// 5.Do While Loop
let num = 0;
console.log("Do...while loop:");
do {
    console.log("Number is " + num);
    num++;
} while (num < 3);

// 6.Switch Statement
let dayOfWeek = "Wednesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Wednesday":
        console.log("Midweek day.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("A regular day.");
        break;
}
