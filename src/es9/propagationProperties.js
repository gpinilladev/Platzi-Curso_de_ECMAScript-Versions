
// Propagation properties - Propiedades de propagacion
// Esta utilidad nos permite unir uno o mas elementos a otro a otro elemento de tipo objeto o arreglo
// Veamos un ejemplo

// 1 - Creamos un objeto con sus propiedades
const obj1 = {
    name: 'German',
    age: 33,
}
// 2 - Creamos otro objeto pero paramos como propiedades el primer objeto, de esta forma el 
// heredara las propiedades de el objeto obj1  
const obj2 = {
    ...obj1,
    country: 'CO',
}

console.log('obj1: ', obj1); // obj1: { name: 'German', age: 33 }
console.log('obj2: ', obj2); // obj2: { name: 'German', age: 33, country: 'CO' }
