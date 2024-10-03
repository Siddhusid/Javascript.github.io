const person = {
    "name": "John Doe",
    "age": 30,
    "isMarried": false,
    "children": [
        {
            "name": "Jane",
            "age": 8
        },
        {
            "name": "Mark",
            "age": 5
        }
    ],
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zipCode": "10001"
    }
};

console.log(person.name);
console.log(person.children[0].name);
console.log(person.address.city);
