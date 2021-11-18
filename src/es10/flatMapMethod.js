// flatMap
// Esta funcion me permite mapear cada elemento, luego pasarle una funcion y 
// enseguida aplanar segun sea el resultado

let arrayData = [1,2,3,4,5];
// Me retorna por cada iteracion un array con el valor en su posicion y el 
// segundo valor es su mismo valor multiplicado por 2. Al final flatMap se 
// encarga no solo de mapearlos, sino tambien de aplanarlos depues de el mapeo
console.log('arrayData: ', arrayData.flatMap(value => [value, value * 2])); // arrayData:  [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]