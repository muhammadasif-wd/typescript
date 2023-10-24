"use strict";
// keyof guard
function add(param1, param2) {
    if (typeof param1 == "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
add("1", "2");
add(1, 2);
function getUser(user) {
    if ("role" in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
const normalUser1 = { name: "Mr. kallu" };
const adminUser1 = { name: "Mr. Gallu", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
//instaceof guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(" I am barking");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log("I am Meawing");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog("German Bhai", "dog"); // instance -> Dog
const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat
getAnimal(animal2);
