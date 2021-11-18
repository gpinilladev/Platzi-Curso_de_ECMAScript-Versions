
// Operador de descanso
// Permite extraer las propiedades de un objeto que aun no se ha construido.
// Extraemos firstName y age y almacenamos el resto de items en la variable remaining
let { firstName, age, ...remaining } = {
    firstName: "German",
    lastName: "Pinilla",
    age: 33,
    height: "5.10",
    race: "Martian",
};
// El resultado en consola es que tendremos las variables individuales y un objeto para el resto
console.log('firstName: ', firstName); // firstName: German
console.log('age: ', age); // age: 33
console.log('remaining: ', remaining); // remaining:  { lastName: "Pinilla", height: "5.10", race: "Martian" }


// En este otro ejemplo veremos como podemos eliminar las propiedades que no necesitamos
let { SSN, ...cleanObj } = {
    firstName: "John",
    lastName: "Smith",
    SSN: "123-456-789",
    race: "Martian",
};
// Vemos un objeto mas limpio eliminando la propiedad que no necesitamos
console.log('cleanObj: ', cleanObj); // { firstName: "John", lastName: "Smith", race: "Martian" };


// Otro ejemplo
const obj = {
    name: 'German',
    age: 33,
    country: 'CO',
}
let { name, ...all } = obj;
console.log('name: ', name); // name: German
console.log('all: ', all); // { age: 33, country: 'CO' }
