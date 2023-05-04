type crushType = {
    name: string,
    age: number,
    readonly phone?: number,
    profession: string,
    address: string

}

const crush1: crushType = {
    name: "neha",
    age: 18,
    phone: 1292023849,
    profession: "web developer",
    address: "hello neha"
}

const crush2: crushType = {
    name: "shanta",
    age: 23,
    profession: "web developer",
    address: "hello shanta"
}
let userAge = [crush1.age, crush2.age]
userAge.forEach(age => {
    if (age < 20) {
        console.log(`She is not married`);
    }
})


// new type add
type crushMarriedType = boolean;
const isCrushMarried: crushMarriedType = false;
type courseNameType = string;
const courseName: courseNameType = "Next Level Web Development";
type operationType = (x: number, y: number) => number

// 
const calculate = (
    number1: number, // 34
    number2: number, // 32
    operation: operationType // (x, y) =>x-y  output ---> (34, 32) ---> 34-32
) => {
    console.log(operation);
    return operation(number1, number2)
};

calculate(34, 32, (x, y) => x + y);