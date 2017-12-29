function sayHello() {
    return `Hello, my name is ${this.name}`;
}

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

console.log(sayHello.call(clark));

console.log(sayHello.call(bruce));


function hello(greeting='Hello') {
    return `${ greeting }, my name is ${ this.name }`;
}

console.log(hello.call(bruce));
console.log(hello.call(clark, 'How do you do'));