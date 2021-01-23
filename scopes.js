//=> Global scope
//console.log(greeting);
let anotherGreeting = 'Hello';
console.log(anotherGreeting);

function sayHelloWorld() {
    // let anotherGreeting = 'Yellow!'; //=> Shadowing
    // let greeting = 'Hello'; //=> Function scope
    console.log(anotherGreeting);
}

//Access parent scope from children scope -> Lexical Scope
sayHelloWorld();

 //Block scope
 for(let i = 0; i<4; i++) {
    console.log(i);
}

//console.log(i);
console.log(name);
var name;
//let name = 'guilherme';
const myConstant = 'miguel';
console.log(myConstant);
myConstant = 'Joao';
