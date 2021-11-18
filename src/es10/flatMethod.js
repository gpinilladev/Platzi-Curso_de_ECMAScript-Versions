// Flat method - Metodo flat
// Esta funcion tiene como utilidad retornar una matriz con sus submatrices
// aplanadas para una mejor lectura.
// La funcion flar recibe como argumento el nivel de profudidad que tiene nuestra
// matriz con submatrices anidadas

// Vamos a construir una matriz con submatrices anidadas y su gado de complejidad
const arrayData = [1,2,3,[1,2,3,[1,2,3]]];
// Como vemos en los consoles, es mas facil leer los datos aplanados que sin aplanar
console.log("Matriz sin aplanar => ", arrayData); // Matriz sin aplanar =>  [ 1, 2, 3, [ 1, 2, 3, [ 1, 2, 3 ] ] ]
console.log("Matriz aplanada => ", arrayData.flat(2)); // Matriz aplanada =>  [1, 2, 3, 1, 2,3, 1, 2, 3]