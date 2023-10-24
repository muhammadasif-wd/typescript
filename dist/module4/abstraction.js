"use strict";
//interface
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(" I am starting engine... ");
    }
    stopEngine() {
        console.log(" I am syopping engine");
    }
}
const vehicle1 = new Vehicle("Car", "Toyota", 2000);
// //abstract class
// abstract class Vehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   abstract startEngine(): void 
//   abstract stopEngine(): void 
//   move(): void {
//     console.log(" I am syopping engine");
//   }
// }
// class Car extends Vehicle{
//   startEngine(): void   {
//     console.log(" I am starting engine... ");
//   }
//   stopEngine(): void {
//     console.log(" I am stopping engine... ");
//   }
// }
const car1 = new Vehicle('Car', 'Honda', 2015);
car1.;
