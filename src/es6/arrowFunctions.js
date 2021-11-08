
// Before ES6 - Las funciones como se conocian anteriomente se definian asi:
function suma(a,b) {
    return a + b;
}
let totalSuma = suma(2, 5); // 2 + 5 => Valores a sumar
console.log('totalSuma: ', totalSuma); // Output 7

// Now in ES6 - Ahora para crear una funcion con ES6 lo hacemos de la siguiente manera:
// Nota como ya no se usa la palabra function para su definicion
let sumaArrowFunction = (a, b) => {
    return a + b;
};
console.log(sumaArrowFunction(2, 5)); // Ouput 7

// Otro ejemplo muy simple
let square = num => num * num;
console.log(square(5)); // Output 25
// CASOS ESPECIALES DE USO - ARROW FUNCTIONS

// 1) - Parametro unico: En este caso podemos ahorrarnos el uso de los parentesis
// Nota como en la definicion de la funcion, si es un solo paremetro podemos ahorrarnos los parentesis
// y javascript entendera que es un unico parametro a la funcion
let valorAbsoluto = numero => {
    return Math.abs(numero);
}
console.log(valorAbsoluto(-4)); // Output 4

// 2) - Ausencia de llaves de apertura y cierre: En el caso en el que tengmos una sola linea de codigo, 
// podemos evitarnos el uso de las llaves de apertura y cierre.
let saludo = nombre => console.log(`Hola!, bienvenido ${nombre}`);
saludo("German");

// 3) - Funciones sin parametros
//Before ES6 
var saludar2 = function(){ return "Hola mundo"; }
//Now ES6 
let saludar1 = () => "Hola mundo";
console.log(saludar2());
console.log(saludar1());

// 4) - Funcion con varios pasos
//ES5 
var saludarPersona = function(nombre){ 
    var salida = "Hola, " + nombre; 
    return salida; 
}
//ES6 
let saludarPersona2 = nombre => { 
    let salida = `Hola ${nombre}`; 
    return salida; 
} 
console.log(saludarPersona("Fernando")); 
console.log(saludarPersona2("Melina"));

// 5) - Devolver un objeto
//ES5 
var obtenerLibro = function(id){ 
    return { id: id, nombre: "Harry Potter" };
}

//ES6 (Si luego de la función flecha ponemos llaves va a interpretar que las llaves pertenecen al cuerpo de una función.)
let obtenerLibro2 = id => ({ id:id, nombre: "Harry Potter"});
// Para devolver el objeto los encerramos entre paréntesis