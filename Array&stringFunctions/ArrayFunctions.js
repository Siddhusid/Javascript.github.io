let arr = [1, 2, 3,4,5];

// push()
arr.push(6);// output: [1,2,3,4,5,6]
console.log(arr);

//pop()
arr.pop();
console.log(arr);// output:[1,2,3,4]

//shift()
arr.shift();
console.log(arr); //output:[2,3,4]

//unshift()
arr.unshift();
console.log(arr); //output:[1,2,3,4]

//concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let concatenate = arr1.concat(arr2);  //output: [1, 2, 3, 4, 5, 6]

//slice()
let newArr = [1, 2, 3, 4];
let sliced = newArr.slice(1, 3);  // Output: [2, 3]

//splice()
let array1 = [1, 2, 3, 4];
array1.splice(1, 2);  // Output: [1, 4]

//reverse()
array1.reverse();
console.log(array1);

//filter()
let filter1 = [1, 2, 3, 4];
let evens = filter1.filter(el => el % 2 === 0); // output:[2,4]

//map()
let mapped = [1, 2, 3];
let squared = mapped.map(el => el * 2); // Output:[2,4,6]

//reduce()
let reduce1 = [1, 2, 3, 4];
let sum = reduce1.reduce((acc, el) => acc + el, 0); // output: 10

//find()
let find1 = [1, 2, 3, 4];
let found = find1.find(el => el > 2); // output:3

//findIndex()
let findindex1 = [1, 2, 3, 4];
let index = findindex1.findIndex((acc, el) => acc + el, 0); // output : 2

//some()
let some1 = [1, 2, 3, 4];
let hasEven = some1.some(el => el % 2 === 0);  // Output: True

//every()
let every1 = [1, 2, 3, 4];
let allEven = every1.every(el => el % 2 === 0);  //Output: False

//includes()
let arrIncludes = [1, 2, 3];
arrIncludes.includes(2);  // Output: True

//Indexof()
let arrindex = [1, 2, 3];
arrindex.indexOf(2);  // Output: 1

//join()
let arrjoin = ['a', 'b', 'c'];
let str = arrjoin.join('-');  // Output: 'a-b-c'

//sort()
let arrsort = [3, 1, 2];
arrsort.sort();  // Output: [1, 2, 3]








