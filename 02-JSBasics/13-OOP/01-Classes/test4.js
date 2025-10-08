class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    get isAdult() {
        return this.age >= 18;
    }

    get name()  {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log('Age cannot be negative.');
        }
    }

    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Name cannot be empty.');
        }
    }
}


const alice = new Person('Alice', 30);
alice.greet(); 

const bob = new Person('Bob', 17);
bob.greet(); 

console.log(`${alice.name} is adult: ${alice.isAdult}`);
console.log(`${bob.name} is adult: ${bob.isAdult}`);

bob.age = 18;
console.log(`${bob.name} is adult: ${bob.isAdult}`);

bob.name = '';
bob.age = -5;