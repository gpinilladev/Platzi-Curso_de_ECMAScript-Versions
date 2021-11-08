// Variables
let name = 'German';
let age = 33;

// Before in ES6
let obj1 = {
    name: name,
    age: age,
};

// Now in ES6
let obj2 = {
    name,
    age,
}

// Output obj1
console.log('obj1: ', obj1);
// Output obj2
console.log('obj2: ', obj2);

