//Big Numbers
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise all settled
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//Global this
console.log(window);
console.log(globalThis);

console.log(window);
console.log(self);
console.log(frames);
console.log(this);

//Null operator
const fooo = 'ass' ?? 'default string';
console.log(fooo);

// ⛓ Optional chaining
const user = {};
console.log(user.profile.email);

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}