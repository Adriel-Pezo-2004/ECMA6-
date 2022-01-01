//replace all
const string = "JS es chevere, JS es plata.";

//solo replaza el primero
const ReplaceString = string.replace("JS","GO");
console.log(ReplaceString);

//reemplaza todo
const otherReplaceString = string.replaceAll("JS","Python");
console.log(otherReplaceString);

//Metodo Público
class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show("Bonjour!");

//Metodo Privado
class Message2 {
    #show2(val){
        console.log(val);
    };
    get #add(val){
        //...
    }
}

const message2 = new Message2();
message2.show2("Hello!");

//Promise Any
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//WeakRef
class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    {...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let a = 2**3;
console.log(a)