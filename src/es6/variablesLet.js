

// Before ES6
// La variable i es cambiada unicamente para el scope de la funcion en este caso vemos como se comporta por fuera y por dentro de una funcion y de un if condicional
// Observamos que la variable es modificada dentro de la funcion pero fuera de la funcion mantiene su valor global
let a = 60; 
function explainLet() {
    let a = 10;
    console.log('a: ', a); // Output 10 <- Solamente se modifica dentro de la funcion
    if (true) {
        let a = 20;
        console.log('a: ', a); // Output 20 <- Solamente se modifica dentro de la funcion
    }
    console.log('a: ', a); // Output 10 <- Solamente se modifica dentro de la funcion
}
// Output
explainLet();
console.log('a: ', a); // Output 60 <- Mantiene el valor del scope global

// Otro ejemplo
// En este ejemplo vemos como a define un valor inicial, pero dentro del for que esta en la funcion 
// se una nueva definicion de a con let a lo que javascript asimila que solo estara para el scope del for loop
// Y por fuera del loop sige manteniendo el valor del scope incial
let a = 60;
(function explainLet2() {
    console.log('a =>', a); // Output 60
    for (let a = 0; a < 5; a++) {
        console.log('a: ', a); // Output 0, 1, 2, 3, 4
    }
})();
console.log('a =>', a); // Output 60
// Output
// explainLet2();

// Otro ejemplo - Haciendo una redefinicion de la misma variable en el mismo scope
// Vemos que dentro de la funcion se define dos veces la variable a a lo cual genera un error de sintaxis.
// Hay que recordar que una defincion de una variable solo se puede hacer una vez por scope en el que se encuentre
function explainVar3() {
    let a = 10;
    let a = 20;
    console.log(a); // Output error - SyntaxError: Identifier 'a' has already been declared
}
explainVar3();

// Ahora con ecmascript 6 es muy facil usar variable ya que unicamente tendran un ciclo por scope, eso nos ayuda 
// a definir unicamente variables con un ciclo definido y evitando mantener basura en nuestro codigo y en rendimiento

// Es el momento de solo usar let en lugar de var, asume el reto y programa de forma moderna