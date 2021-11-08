// Now in ES8
// async y await funciona principalmente con promesas. En ese sentido debemos crear primero una 
// funcion que retorne una promesa, de la siguiente forma
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hello World!");
            }, 3000);
        } else {
            reject(new Error("Test error"));
        }
    });
}

// El segundo paso despues de tener la promesa es crear una funcion y anteponer la palabra
// reservada 'async', asi:
const helloAsync = async () => {
    // El tercer paso es que aca dentro de la funcion mantengamos el valor de la promesa y 
    // eso lo hacemos creando una variable e instanciandole la funcion promesa y anteponiendo 
    // la palabra 'await', asi:
    const hello = await helloWorld();
    // una vez almacenado el valor de la promesa, podemos controlar el resultado en la variable
    // y manipularlo o como en este caso imprimirlo con el console.log, asi:
    console.log('hello: ', hello);
};


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log('hello: ', hello);
    } catch (error) {
        console.log('error: ', error);
    }
}

helloAsync();
anotherFunction();