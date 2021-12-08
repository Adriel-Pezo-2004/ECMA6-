// ----CLASE 1-----

//Javascript
function newFuction(name,age,country){
    var name = name || 'Adriel';
    var age = age || 17;
    var country = country || 'PE';
    console.log(name,age,country);
};

// es6+
function newFuction2(name = 'Adriel',age = 17,country = 'PE'){
    console.log(name,age,country)
};

newFuction2();
newFuction2('Adriel','18','PE');

// Javascript
let hello = 'HELLO';
let world = 'MONDE';
let frase = hello + ' ' + world;
console.log(frase);

// es6+
let frase2 = `${hello} ${world}`;
console.log(frase2);