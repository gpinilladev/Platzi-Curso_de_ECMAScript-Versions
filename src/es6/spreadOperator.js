// Before in ES6 - Spread Operator Object
const valores1 = {
    a1: 'Valor1',
    a2: 'Valor2',
    a3: 'Valor3',
}

const valores2 = {
    b1: 'Valor4',
    b2: 'Valor5',
    b3: 'Valor6',
}

const valoresFull = { 
    a1: 'Valor1',
    a2: 'Valor2',
    a3: 'Valor3',
    b1: 'Valor4',
    b2: 'Valor5',
    b3: 'Valor6',
    c1: 'Valor7',
};
console.log('valoresFull: ', valoresFull);

// Before in ES6 - Spread Operator Object
const valores1es6 = {
    a1: 'Valor1',
    a2: 'Valor2',
    a3: 'Valor3',
}

const valores2es6 = {
    b1: 'Valor4',
    b2: 'Valor5',
    b3: 'Valor6',
}

const valoresFulles6 = { 
    ...valores1es6,
    ...valores2es6,
    c1: 'Valor7',
};
console.log('valoresFulles6: ', valoresFulles6);