//Length()
let str = "Hello World";
console.log(str.length);  // Output:10

//CharAt()
console.log(str.charAt(1));  // "e"

//toUppercase()
let upperStr = str.toUpperCase();
console.log(upperStr);  // Output: HELLO WORLD

//tolowercase()
let lowerStr = str.toLowerCase();
console.log(lowerStr); //Output: hello world

//Indexof()
let index = str.indexOf("World");
console.log(index); // output:6

//lastIndexOf()
let str1 = "Hello World World";
let index1 = str1.lastIndexOf("World");
console.log(index1);  //Output: 12

//Substring()
let part = str.substring(0, 5);
console.log(part); //Output:"Hello"

//Slice()
let sliced = str.slice(6);
console.log(sliced);  //Output: "World"

//Replace()
let newStr = str.replace("World", "JavaScript");
console.log(newStr);  // "Hello JavaScript"

//Split()
let newStr1 = str.replace("World", "JavaScript");
console.log(newStr1);  // "Hello JavaScript"

//trim()
let str2="  Hello World   "
let trimmedStr = str.trim();
console.log(trimmedStr); //Output:"Hello World"

//startswith()
console.log(str.startsWith("Hello"));  //Output:True

//endswith()
console.log(str.endsWith("World"));  //Output: True

//Includes()
console.log(str.includes("World"));  //Output: True

//Repeat()
let str3 = "Hello";
let repeatedStr = str3.repeat(3);
console.log(repeatedStr);  //Output: "HelloHelloHello"

//concat()
let combined = str1.concat(" ", str3);
console.log(combined);  //Output: "Hello World World Hello"

//charCodeAt()
let code = str.charCodeAt(0);
console.log(code);  //Output:72

//Search()
let position = str.search("World");
console.log(position);  // Output: 6

//toString()
let num = 18;
let String = num.toString();
console.log(string);  //Output: "18"





