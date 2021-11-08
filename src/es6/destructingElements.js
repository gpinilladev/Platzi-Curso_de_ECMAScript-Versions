// Before in ES6 - Destructing Object
let person = {
    name: 'German Pinilla',
    age: 33,
    country: 'CO',
};
console.log('name: ', person.name);
console.log('age: ', person.age);
console.log('country: ', person.country);


// Now in ES6 - Destructing Object
let person2 = {
    name: 'German Pinilla',
    age: 33,
    country: 'CO',
};

let { name, age, country } = person2;
console.log('name: ', name);
console.log('age: ', age);
console.log('country: ', country);

// Before in ES6 - Destructing array
let person3 = [
    'German Pinilla',
    33,
    'CO',
];
console.log('person3 Name: ', person3[0]);
console.log('person3 Age: ', person3[1]);
console.log('person3 Country: ', person3[2]);

// Now in ES6 - Destructing array
let person4 = [
    'German Pinilla',
    33,
    'CO',
];
let [ name, age, country ] = person4;
console.log('name: ', name);
console.log('age: ', age);
console.log('country: ', country);

