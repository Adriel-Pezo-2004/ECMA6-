// ----CLASE 3-----

// Javascript
let name3 = 'Adriel';
let age3 = 18;
ob = {name: name3, age:age3};
console.log(ob);

// es6
ob2 = {name3,age3};
console.log(ob2);


const names = [
    { name:'Adriel', age:18 },
    { name:'Julia', age:17 }
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

// const listOfNames3 = (name,age,country) => {
    // ...
// }

// const listOfNames4 = name => {
    // ...
// }

const square = num => num * num;

