// create a sum function
console.log("run this file successfully");


function add(num1: number, num2: number): number {
    const sum = num1 + num2
    console.log(sum);
    return sum
}

add(1, 5)

const minus = (num1: number, num2: number): number => {
    const minusResult = num1 + num2
    console.log(minusResult);
    return minusResult
}

minus(34, 23)


// example array

const arr = [3, 5, 1, 4, 6, 2, 8, 11]

const newArray = arr.map(elem => elem * elem)

console.log(newArray);

const person: {
    name: string,
    balance: number,
    role: string
    addBalance(money: number): void;
} = {
    name: 'Asif',
    balance: 23,
    role: "user",
    addBalance(money: number) {
        const myBalance = this.balance + money;
        console.log(`My recent balance = ${myBalance}`);
        return;
    },
}



console.log(person);


// spread operators 
const myFriends = ["a", "b", "c", "d"];
const newFriends = ["f", "g"]
myFriends.push(...newFriends)
console.log(myFriends);


// great friends
// rest parameter

const greatFriends = ((...friends: string[]): void => friends.forEach(friends => console.log(friends)))

greatFriends("shanta", "sathi")


// arrays and objects destructure...
const myBestFriends = {
    friendName: "ashik",
    age: 34
}
const [bestFriends] = myFriends
const { friendName: fullName, age } = myBestFriends
console.log({ fullName }, age);
