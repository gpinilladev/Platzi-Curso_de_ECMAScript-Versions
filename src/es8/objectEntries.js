// Now in ES8
const data = {
    frontend: 'German',
    backend: 'Isabel',
    design: 'Ana',
};

// Object.entries nos permite convertir un objeto en un array
const entries = Object.entries(data);
console.log('entries: ', entries); // entries: [ 'frontend': 'German', 'backend': 'Isabel', 'design': 'Ana'];
console.log('entries length: ', entries.length); // entries length: 3
