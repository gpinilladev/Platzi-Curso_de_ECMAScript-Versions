// Promise All Settled

// Esta funcion nos retorna una promesa que se resuelve despues de que 
// todas las promesas dadas se hayan cumplido o rechazado en una serie 
// de objetos donde se describe el resultado de cada promesa
const promise1 = new Promise ((resolve, reject) => reject("Promsesa 1 rechazada"));
const promise2 = new Promise ((resolve, reject) => resolve("Promsesa 2 resuelta corerctamente"));
const promise3 = new Promise ((resolve, reject) => resolve("Promsesa 3 resuelta corerctamente"));

// Retorna una promesa que retorna a su vez una array de objetos con 
// la respuesta de cada promesa asi alguna haya fallado
Promise.allSettled([promise1, promise2, promise3]).then(resp => {
    console.log('resp: ', resp);
    // resp:  [
    //     { status: 'rejected', reason: 'Promsesa 1 rechazada' },
    //     { status: 'fulfilled', value: 'Promsesa 2 resuelta corerctamente' },
    //     { status: 'fulfilled', value: 'Promsesa 3 resuelta corerctamente' }
    // ]
})

// NOTA: La diferencia entre las funciones all() y allSettled(),
// es que all() se detiene y no termina de cumplir las otras promesas
// si encuetnra que alguna fallo, mientras que allSettled(), las ejecuta 
// todas sin importar si alguna fallo y de igual forma retorna el 
// resultado de cada promesa en un array de respuestas 
Promise.all([promise1, promise2, promise3]).then(resp => {
    console.log('resp: ', resp);
});