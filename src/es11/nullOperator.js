// Operador logico: Null Operator

// Basicamente, valida unica y exclusivamente si un valor es null

// Como vemos en los siguientes ejemplos, solo valida si el valor es null
// no importsa si es false, 0 o vacio ''
const foo1 = null ?? 'Default string'; // <-- Retorna el valor validado de null
console.log('foo1: ', foo1); // 'Default string'

const foo2 = 0 ?? 'Default string';
console.log('foo2: ', foo2); // 0

const foo3 = false ?? 'Default string';
console.log('foo3: ', foo3); // false

const foo4 = '' ?? 'Default string';
console.log('foo4: ', foo4); // ''