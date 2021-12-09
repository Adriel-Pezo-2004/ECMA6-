// -------------CLASE 4.2-------------

const hello = require('./module');
console.log(hello());
hello();

// --Función Generadora--
function* helloWorld(){
    if (true) {
        yield 'Hello ';
    }
    if (true) {
        yield 'World!';
    }
};

const geneHello = helloWorld();
console.log(geneHello.next().value);
console.log(geneHello.next().value);
console.log(geneHello.next().value);