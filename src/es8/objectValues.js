// Now in ES8
const data = {
    frontend: 'German',
    backend: 'Isabel',
    design: 'Ana',
};

// Object.values nos permite extraer los valores de un objeto y crear un array solo con los valores
const values = Object.values(data); // ['German', 'Isabel', 'Ana'];
console.log('values: ', values); // values: ['German', 'Isabel', 'Ana'];
console.log('values length: ', values.length); // values length: 3