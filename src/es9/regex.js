// Regex
// Es una utilidad que nos permite separar segmentos de un texto en bloques
// 1 - En primer lugar debemos crear una constante con la expresion regular
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
// 2 - Despues debemos ejecutarla mediante exec y le pasamos un texto para validar
const match = regexData.exec('2018-04-20');
console.log('match: ', match);
// 3 - Una vez ejecutado podemos tener cada valor separado por la expresion regular
const year = match[1];
console.log('year: ', year);
const month = match[2];
console.log('month: ', month);
const day = match[3];
console.log('day: ', day);


// Otra de las nuevas características de ES9 en la captura de grupos es 
// nombrar nuestros grupos para encontrarlos de una forma más fácil. 

// El código al final podría resumirse en lo siguiente:
const regexData1 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = regexData1.exec('2018-04-20');
const { year, month, day } = match.groups;
console.log('day: ', day);
console.log('month: ', month);
console.log('year: ', year);