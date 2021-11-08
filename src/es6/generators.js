// New in ES6

// Easy example
function* genHello() {
    if(true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World!';
    }
}

let saludo = genHello();

console.log('saludo.next(): ', saludo.next());
console.log('saludo.next(): ', saludo.next());
console.log('saludo.next(): ', saludo.next());


// other exmaple
function* counter(numberParam) {
    let i = 0;
    while(i <= numberParam) {
        yield i;
        i++;
    }
}
let newCounter = counter(5);
console.log('newCounter.next(): ', newCounter.next());
console.log('newCounter.next(): ', newCounter.next());
console.log('newCounter.next(): ', newCounter.next());
console.log('newCounter.next(): ', newCounter.next());
console.log('newCounter.next(): ', newCounter.next());
console.log('newCounter.next(): ', newCounter.next());