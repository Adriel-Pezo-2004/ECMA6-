//Javascript
function newFuction(name,age,country){
    var name = name || 'Adriel';
    var age = age || 17;
    var country = country || 'PE';
    console.log(name,age,country);
};

//ES6+
function newFuction2(name = 'Adriel',age = 17,country = 'PE'){
    console.log(name,age,country)
};

newFuction2();
newFuction2('Adriel','18','PE');

//
let hello = 'HELLO';
let world = 'MONDE';
let frase = hello + ' ' + world;
console.log(frase);
let frase2 = `${hello} ${world}`;
console.log(frase2);