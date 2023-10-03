// function people(name, age){
//     console.log(`my name is ${name}, am ${age} years old`)
// }

// people('ALex', 44);


// Constructor Method

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         var target = 7;
//         if (1 + 5 == target) {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         }
//     }
//     myAge() {
//         console.log(`Hello my age is ${this.age}`)
//     }
// }
// const john = new Person('John', 30);
// john.sayHello(); // logs "Hello, my name is John and I am 30 years old."
// john.myAge();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    myAge() {
        console.log(`Hello my age is ${this.age}`)
    }
}
const john = new Person('John', 30);
john.sayHello(); // logs "Hello, my name is John and I am 30 years old."
john.myAge();
