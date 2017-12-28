function sayHello() {
    return `Hello, my name is ${this.name}`;
}

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

sayHello.call(clark);

sayHello.call(bruce);
