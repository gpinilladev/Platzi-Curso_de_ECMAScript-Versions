

// Before ES6
// La variable i es cambiada globalmente en la iteracion del codigo
var i = 60;
function explainVar() {
    var a = 10;
    console.log('a: ', a);
    if (true) {
        var a = 20;
        console.log('a: ', a);
    }
    console.log('a: ', a);
}
// Output
explainVar();

// Otro ejemplo
// En este ejemplo vemos como a es remplazada en el for pero fuera de la funcion tiene el valor del scope global
var a = 60;
(function explainVar2() {
    for (var a = 0; a < 5; a++) {
        console.log('a: ', a);
    }
})();
console.log('a =>', a);
// Output
// explainVar2();

// Otro ejemplo
// En este ejemplo vemos que se olvida inicializar con var c en el for a lo cual javascript lo asocia a la variable previamente
// creada y reasigna su valor para al final ver el valor re asignado
var c = 60;
(function explainVar3() {
    for (c = 0; c < 5; c++) {
        console.log('c: ', c);
    }
})();
console.log('c =>', c);
// Output
// explainVar3();

// Usar vareiables de tipo var puede significar un problema ya que podemos crear y reasignar variables en
// nuestro codigo incluso sin darnos cuenta y esto podria ocasionarnos problemas por lo que se recomienda 
// usar ES6 y sus nuevos tipos de variables let y const

// Ya no hay excusa para dejar de usar var como una buena practica de desarrollo