// Global this

// La propiedad de global que en este caso vamos a utilizar 
// tiene el valor global de this, que es similar al objeto global
// window es una funcion que podemos usar en la consola del navegador 
// y nos retorna los datos globales en ejecucion, pero no nos funciona 
// en scripts y para eso usamos globalThis que basicamente nos retorna
// algo similar a lo que nos retorna window
console.log(window);
console.log(globalThis);