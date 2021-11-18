// Promise Finally
// Esta nueva funcion de ES9 nos permite saber cuando una promesa finaliza
// 1 - Debemos crear una promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? resolve("Hello World!") : 
        reject(new Error("Test error"));
    });
}

// 2 - En segundo lugar debemos instanciar la promesa con then y catch y al final invocar la funcion
// finally que nos retorna un mensaje cuando termina de ejecutarse el llamado de la promesa
helloWorld().then(response => {
    console.log('response: ', response);
}).catch(error => {
    console.log('error: ', error);
}).finally(() => {
    console.log("Termino de ejecutarse la promesa!");
});