
// Before ES6
function newFunctionCallbackHell() {
    callbackHell1(function (response1) {
        console.log('response1: ', response1);
        if (response1) {
            callbackHell2(function (response2) {
                console.log('response2: ', response2);
                if (response2) {
                    callbackHell3(function (response3) {
                        console.log('response3: ', response3);
                        if (response3) {
                            console.log("Callback hell infinite ...... !");
                        } else {
                            console.log("callbackHell3 fail!");
                        }
                    });
                } else {
                    console.log("callbackHell2 fail!");
                }
            });
        } else {
            console.log("callbackHell1 fail!");
        }
    });
}

function callbackHell1(callback) {
    if (true) {
        callback(true);
    } else {
        callback(false);
    }
}

function callbackHell2(callback) {
    if (true) {
        callback(true);
    } else {
        callback(false);
    }
}

function callbackHell3(callback) {
    if (true) {
        callback(true);
    } else {
        callback(false);
    }
}

newFunctionCallbackHell();


// Now in ES6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Ok - Successfully!");
        } else {
            reject("Error - Unsuccessfully :(");
        }
    });
}

helloPromise()
.then(response => { 
    console.log('response: ', response);
}).then( response => {
    console.log('Hola respuesta 1');
}).then( response => {
    console.log('Hola respuesta 2');
}).then( response => {
    console.log('Hola respuesta 3');
}).catch( error => {
    console.log('error: ', error);
});

// Promesas encadenadas
function hacerAlgoPromesa(tarea) {
    function haciendoalgo(resolve, reject) {
        console.log(`hacer ${tarea} que ocupa un tiempo...`);
        setTimeout(resolve, 2000);
    }
    return new Promise( haciendoalgo );
}

hacerAlgoPromesa('documentar un tema')
.then(function(response) {
    return hacerAlgoPromesa('escribir el artículo');
}).then(function(response) {
    return hacerAlgoPromesa('publicar en desarrolloweb.com');
}).then(function(response) {
    return hacerAlgoPromesa('recibir vuestro apoyo cuando compartís en vuestras redes sociales');
});