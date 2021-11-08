// Before ES6
function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// Now in ES6
function newFunction2(name = 'Oscar', age = 32, country = 'MX') {
console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');
