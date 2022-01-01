let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(3));

console.log('<----------------------------->');

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value*2]));

console.log('<----------------------------->');

let hello = '       hello World';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World      ';
console.log(hello2);
console.log(hello2.trimEnd());

console.log('<----------------------------->');

try{

}catch {
  error
}

console.log('<----------------------------->');

//Transformar arreglos en Objetos

let entries = [["name",'Adriel'],["age",17]];
console.log(Object.fromEntries(entries));

console.log('<----------------------------->');

let mySymbl = `AeA`;
let symbol = Symbol(mySymbl);
console.log(symbol)
