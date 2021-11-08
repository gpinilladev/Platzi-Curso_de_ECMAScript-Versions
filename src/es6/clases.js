// Before ES6
/* 
Anteriormente lo que se hacia era aprovecharse de la herencia de prototipos y asi poder
crear las "clases", y para lograrlo usabamos una sintaxis similar a la siguiente:
*/
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
Persona.prototype.presentarse = function() {
    return "Hola soy " + this.nombre + " y tengo " + this.edad + " años";
}

var user1 = new Persona("German", 33);
var saludo1 = user1.presentarse();
console.log('saludo1: ', saludo1);


// Now in ES6
/*
Con el fin de facilitar la forma de trabajar con POO, ES6 incorporó una forma de crear clases 
y objetos como en otros lenguajes, aunque al final esta sintaxis para hacer POO es simplemente 
una capa sobre la sintaxis actual, medianamente prototipos, pero mas facil de entender.
*/
class PersonaPOO {

    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return "Hola soy " + this.nombre + " y tengo " + this.edad + " años";
    }

}

var user2 = new PersonaPOO("German", 33);
var saludo2 = user2.presentarse();
console.log('saludo2: ', saludo2);