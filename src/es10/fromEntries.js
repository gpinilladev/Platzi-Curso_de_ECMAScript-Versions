// fromEntries
// Esta funcion permite transformar clave valor en un objeto
let entries = [["name", "oscar"], ["age", 32]];
console.log('entries sin fromEntries: ', entries); // entries sin fromEntries:  [ [ 'name', 'oscar' ], [ 'age', 32 ] ]
console.log('entries con fromEntries: ', Object.fromEntries(entries)); // entries con fromEntries:  { name: 'oscar', age: 32 }