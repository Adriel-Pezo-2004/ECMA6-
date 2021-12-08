// ----CLASE 2-----

// Javascript
let lorem = "lorem ipsum dolor sit am sit amet, \n" + "consectetur adipiscing elit sed diam";

// es6+
let lorem2 = `Otra frase tipo
no mms Juan`;

console.log(lorem);
console.log(lorem2);

// Javascript
let person = {
    'name2': 'Adriel',
    'age' : 17,
    'country' : 'Perú',
}
console.log(person.name2, person.age);

// es6+
let {name2, age} = person;
console.log(name2, age);