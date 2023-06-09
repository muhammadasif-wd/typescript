## 2-1 :Installation typescript , nvm & ts-node-dev

## Installation & setup typescript

There are multiple ways to install TypeScript, and we will discuss the three most popular methods.

### Method 1: Init package.json

```
npm init -y

```

### Method 2: Typescript install

```
npm i typescript

```

### Method 3: Init Typescript Config

```
tsc --init

```

### Method 4: TS Node DEV

```sh
 npm i ts-node-dev
```

### Method 5: Seup ts node dev

```sh
'start': 'ts-node-dev --respawn --transpile-only server.ts'
```

### Method 6: Run ts node dev

```sh
npx ts-node-dev --respawn --transpile-only src
```

### Method 7: Setup Root Directory in typescript json.

```
"rootDir": "./src"

```

### Method 8: Setup Out Directory in typescript json.

```
"outDir": "./dist"

```

### How to install nvm?

nvm (Node Version Manager) is a tool that allows us to switch between different versions of Node.js. To install nvm, we need to run the following command:

```
npm i -g nvm

```

We can then use the following command to switch to a specific version of Node.js:

```
nvm use node <version>

```

## Best Practices

Here are some best practices to follow while using TypeScript:

### 1. Use Strict Mode

Enabling strict mode in TypeScript can help us catch more errors during development. We can enable strict mode by adding the following line to our tsconfig.json file:

```
{
  "compilerOptions": {
    "strict": true
  }
}

```

### 2. Use Interfaces

Interfaces are a powerful feature of TypeScript that allow us to define the shape of an object. We should use interfaces wherever possible instead of relying on the `any` type. Here's an example:

```
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}!`);
}

const john = { name: 'John', age: 30 };

greet(john);

```

### 3. Use Enums

Enums are another powerful feature of TypeScript that allow us to define a set of named constants. We should use enums wherever possible instead of relying on string literals or numbers. Here's an example:

```
enum Color {
  Red,
  Green,
  Blue,
}

function paint(color: Color) {
  switch (color) {
    case Color.Red:
      console.log('Painting red');
      break;
    case Color.Green:
      console.log('Painting green');
      break;
    case Color.Blue:
      console.log('Painting blue');
      break;
  }
}

paint(Color.Red);

```

### 4. ALL

```
let course: String = "Welcome Next Level Web Development";
// you not change value without type String
//example: course = 234
course = "Next Level Web Development By Programming Hero";
console.log(course);

let rollNumber: Number = 343;
// you not change value without type Number
// example: rollNumber = "234"
rollNumber = 3;
console.log(rollNumber);

let loveYou: Boolean = true;
let breakup: Boolean = true;
breakup = false
if (breakup) {
  loveYou = false;
}
console.log("Love You", loveYou);

```

## Conclusion

TypeScript is a powerful programming language that can help us write better and maintainable code. In this blog post, we discussed the installation process of TypeScript and some best practices to follow while using it. By following these best practices, we can write more robust and scalable applications.

## **2-2** Primitive Types in TypeScript

TypeScript has the following primitive types:

- `string`: represents textual data
- `number`: represents numerical data
- `boolean`: represents a logical value (`true` or `false`)
- `null`: represents a null value
- `undefined`: represents an undefined value

We can declare variables of these types as follows:

```
let name: string = 'John';
let age: number = 30;
let isMarried: boolean = true;
let nothing: null = null;
let something: undefined = undefined;

```

We can also declare variables without specifying their type, and TypeScript will automatically infer the type based on the value:

```
let name = 'John'; // inferred type: string
let age = 30; // inferred type: number
let isMarried = true; // inferred type: boolean
let nothing = null; // inferred type: null
let something = undefined; // inferred type: undefined

```

Note that we can also use the `any` type to represent any type of data. However, it is generally not recommended to use the `any` type, as it defeats the purpose of using TypeScript to catch errors at compile-time.

## Arrays and Tuples in TypeScript

Arrays and tuples are two types of data structures that we can use in TypeScript.

### Arrays

An array is a collection of elements of the same type, which are stored in a contiguous memory location. We can declare an array in TypeScript as follows:

```
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['hello', 'world'];

```

We can also use the `Array` type to declare an array:

```
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ['hello', 'world'];

```

### Tuples

A tuple is a collection of elements of different types, which are stored in a fixed order. We can declare a tuple in TypeScript as follows:

```
let person: [string, number] = ['John', 30];

```

Here, the first element of the tuple is a string, and the second element is a number.

We can also use the `type` keyword to declare a tuple type:

```
type Person = [string, number];

let john: Person = ['John', 30];

```

In this example, we have defined a `Person` type, which is a tuple of a string and a number.

## Conclusion

In this section, we discussed the primitive types, arrays, and tuples in TypeScript. By using these data structures, we can write more robust and maintainable code.

**Array and Tuples in typescript**

## **2-3:** Arrays and Tuples in TypeScript

Arrays and tuples are two types of data structures that we can use in TypeScript.

### Arrays

An array is a collection of elements of the same type, which are stored in a contiguous memory location. We can declare an array in TypeScript as follows:

```
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['hello', 'world'];

```

We can also use the `Array` type to declare an array:

```
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ['hello', 'world'];

```

### Tuples

A tuple is a collection of elements of different types, which are stored in a fixed order. We can declare a tuple in TypeScript as follows:

```
let person: [string, number] = ['John', 30];

```

Here, the first element of the tuple is a string, and the second element is a number.

We can also use the `type` keyword to declare a tuple type:

```
type Person = [string, number];

let john: Person = ['John', 30];

```

In this example, we have defined a `Person` type, which is a tuple of a string and a number.

### ALL

```
let friends = ["asif", "shahed", "shahariar", 34, 32, 35];
// friends.map(friend => console.log(friend)
// )

console.log(friends);

let families: [Number, String] = [34, "Anies"];

families[0] = 5;
families[1] = "Adnan";

console.log(families);

```

## Conclusion

In this section, we discussed the primitive types, arrays, and tuples in TypeScript. By using these data structures, we can write more robust and maintainable code.

# **2-4:** Object, Literal Types, and Optional Types

## Introduction

In this blog post, we will discuss object types, literal types, and optional types in TypeScript. These features can help us write more robust and maintainable code.

## Object Types

An object type is a type that describes the shape of an object. We can define an object type using the following syntax:

```
type Person = {
  name: string;
  age: number;
  address: string;
};

```

Here, we have defined a `Person` type that has three properties: `name`, `age`, and `address`. We can then use this type to declare variables of type `Person`, like this:

```
const john: Person = {
  name: 'John',
  age: 30,
  address: '123 Main St.',
};

```

Object types can also have optional properties, which are denoted by a `?` symbol:

```
type Person = {
  name: string;
  age: number;
  address?: string;
};

```

Here, the `address` property is optional, which means that we can omit it when creating a `Person` object.

## Literal Types

A literal type is a type that represents a single value, rather than a range of values. We can define a literal type using the following syntax:

```
type Direction = 'north' | 'south' | 'east' | 'west';

```

Here, we have defined a `Direction` type that can only have one of four possible string values. We can then use this type to declare variables that can only have these values:

```
const direction: Direction = 'north';

```

Literal types can be useful when we want to restrict the possible values of a variable or parameter.

## Optional Types

In TypeScript, we can also make properties or parameters optional by appending a `?` symbol to their names:

```
type Person = {
  name: string;
  age: number;
  address?: string;
};

```

Here, the `address` property is optional, which means that we can omit it when creating a `Person` object. We can also make function parameters optional:

```
function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Hello!');
  }
}

```

Here, the `name` parameter is optional, which means that we can omit it when calling the `greet` function.

## ALL

```
const user: {
  name: String;
  number: Number;
  admin: Boolean;
  //   readonly company: String;
  //   company: "Programming Hero";
  company: "Programming Hero";
  age: Number;
  isMarried: Boolean;
  wife?: String;
} = {
  name: "Asif",
  number: 34934398,
  admin: false,
  company: "Programming Hero",
  age: 32,
  isMarried: true,
  //   wife: "suborna"
};

// user.company = "Programming Community";
console.log(user);
```

## Conclusion

In this blog post, we discussed object types, literal types, and optional types in TypeScript. By using these features, we can write more robust and maintainable code.

# **2-5:** Functions in TypeScript

Functions are an essential part of any programming language, and TypeScript is no exception. In this blog post, we will discuss how to define and use functions in TypeScript.

## Function Types

In TypeScript, we can define the type of a function using the following syntax:

```
function add(x: number, y: number): number {
  return x + y;
}

```

Here, we have defined a function named `add` that takes two parameters of type `number` and returns a value of type `number`.

We can also define the type of a function as a variable or constant using the following syntax:

```
let add: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

```

Here, we have defined a variable named `add` that has the same type as the `add` function we defined earlier.

## **2-6:** Optional and Default Parameters

In TypeScript, we can make function parameters optional by appending a `?` symbol to their names. We can also provide default values for parameters using the `=` symbol.

Here's an example:

```
function greet(name?: string, message: string = 'Hello') {
  console.log(`${message}, ${name ?? 'world'}!`);
}

greet(); // prints "Hello, world!"
greet('John'); // prints "Hello, John!"
greet('Jane', 'Hi'); // prints "Hi, Jane!"

```

Here, the `name` parameter is optional, and the `message` parameter has a default value of "Hello".

## Rest Parameters

In TypeScript, we can use the rest parameter syntax to define a function that can take an arbitrary number of arguments. We can do this by adding `...` before the parameter name.

Here's an example:

```
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // prints 6
console.log(sum(1, 2, 3, 4, 5)); // prints 15

```

Here, the `sum` function can take any number of arguments, which are stored in an array named `numbers`.

## Conclusion

In this blog post, we discussed how to define and use functions in TypeScript. We learned how to define function types, use optional and default parameters, and use rest parameters to define functions that can take an arbitrary number of arguments. By using these features, we can write more robust and maintainable code.
<insert-here/>
</document>

## Spread Operator

The spread operator (`...`) is a feature of TypeScript that allows us to spread the elements of an array or object into another array or object. Here's an example:

```
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const allNumbers = [...numbers, ...moreNumbers];

console.log(allNumbers); // prints [1, 2, 3, 4, 5, 6]

```

In this example, we are using the spread operator to concatenate two arrays together.

We can also use the spread operator to create a copy of an array or object:

```
const numbers = [1, 2, 3];
const copyOfNumbers = [...numbers];

console.log(copyOfNumbers); // prints [1, 2, 3]

```

## Rest Parameters

The rest parameter syntax (`...`) is another feature of TypeScript that allows us to define a function that can take an arbitrary number of arguments. We can do this by adding `...` before the parameter name. Here's an example:

```
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // prints 6
console.log(sum(1, 2, 3, 4, 5)); // prints 15

```

In this example, the `sum` function can take any number of arguments, which are stored in an array named `numbers`.

## Default Parameters

Default parameters are another feature of TypeScript that allow us to provide default values for function parameters. We can do this by adding `=` symbol after the parameter name. Here's an example:

```
function greet(name: string = 'world') {
  console.log(`Hello, ${name}!`);
}

greet(); // prints "Hello, world!"
greet('John'); // prints "Hello, John!"

```

In this example, the `name` parameter has a default value of "world".

## Destructuring

Destructuring is a feature of TypeScript that allows us to extract properties from an object or elements from an array and store them in variables. Here's an example:

```
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St.',
    city: 'Anytown',
    state: 'CA',
  },
};

const { name, age, address: { city } } = person;

console.log(name); // prints "John"
console.log(age); // prints 30
console.log(city); // prints "Anytown"

```

In this example, we are using destructuring to extract the `name`, `age`, and `city` properties from the `person` object and store them in variables.

## Conclusion

In this blog post, we discussed the spread operator, rest parameters, default parameters, and destructuring in TypeScript. These features can help us write more concise and readable code.

# **2-7:** Type Aliases and Optional Types

## Type Aliases

In TypeScript, we can define a type alias using the `type` keyword. A type alias is a name that we can use to refer to a specific type.

Here's an example:

```
type Age = number;

function greet(name: string, age: Age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet('John', 30); // prints "Hello, John! You are 30 years old."

```

In this example, we have defined a type alias named `Age` that refers to the `number` type. We then use this type alias in the `greet` function to specify the type of the `age` parameter.

Type aliases can also be used to define more complex types. For example:

```
type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

const john: Person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St.',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
};

console.log(john); // prints the entire Person object

```

In this example, we have defined a type alias named `Person` that describes the shape of a person object. We then use this type alias to declare a variable named `john`.

## Optional Types

In TypeScript, we can make properties or parameters optional by appending a `?` symbol to their names:

```
type Person = {
  name: string;
  age?: number;
  address?: string;
};

```

Here, the `age` and `address` properties are optional, which means that we can omit them when creating a `Person` object.

We can also make function parameters optional:

```
function greet(name: string, message: string = 'Hello') {
  console.log(`${message}, ${name}!`);
}

greet('John'); // prints "Hello, John!"
greet('Jane', 'Hi'); // prints "Hi, Jane!"

```

Here, the `message` parameter has a default value of "Hello", which means that we can omit it when calling the `greet` function.

## Conclusion

In this blog post, we discussed type aliases and optional types in TypeScript. Type aliases can be used to define more complex types and make our code more readable. Optional types can be used to make properties, parameters, and function arguments optional, which can make our code more flexible.

# **2-8:** Union, Intersection and Enum Types

## Union Types

In TypeScript, we can define a union type by using the `|` symbol. A union type allows us to specify that a variable or parameter can have one of several types.

Here's an example:

```
type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Employee = {
  name: Name;
  id: number;
};

function printDetails(person: Person | Employee) {
  console.log(`Name: ${person.name}`);
  if ('age' in person) {
    console.log(`Age: ${person.age}`);
  }
  if ('id' in person) {
    console.log(`ID: ${person.id}`);
  }
}

const john: Person = { name: 'John', age: 30 };
const jane: Employee = { name: 'Jane', id: 123 };

printDetails(john); // prints "Name: John" and "Age: 30"
printDetails(jane); // prints "Name: Jane" and "ID: 123"

```

In this example, we have defined a union type that can be either a `Person` or an `Employee`. We then use this union type in the `printDetails` function to specify the type of the `person` parameter.

## Intersection Types

In TypeScript, we can define an intersection type by using the `&` symbol. An intersection type allows us to specify that a variable or parameter must have properties from several types.

Here's an example:

```
type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Employee = {
  id: number;
  salary: number;
};

type Developer = Person & Employee;

const john: Developer = { name: 'John', age: 30, id: 123, salary: 5000 };

console.log(john); // prints the entire Developer object

```

In this example, we have defined an intersection type that combines properties from the `Person` and `Employee` types to create a new type named `Developer`. We then declare a variable named `john` of type `Developer`.

## Enum Types

In TypeScript, we can define an enum type by using the `enum` keyword. An enum type allows us to define a set of named constants.

Here's an example:

```
enum Color {
  Red,
  Green,
  Blue,
}

function paint(color: Color) {
  switch (color) {
    case Color.Red:
      console.log('Painting red');
      break;
    case Color.Green:
      console.log('Painting green');
      break;
    case Color.Blue:
      console.log('Painting blue');
      break;
  }
}

paint(Color.Red); // prints "Painting red"

```

In this example, we have defined an enum type named `Color` that has three possible values: `Red`, `Green`, and `Blue`. We then use this enum type in the `paint` function to specify the type of the `color` parameter.

## Conclusion

In this blog post, we discussed union types, intersection types, and enum types in TypeScript. Union types allow us to specify that a variable or parameter can have one of several types. Intersection types allow us to specify that a variable or parameter must have properties from several types. Enum types allow us to define a set of named constants. By using these features, we can write more robust and maintainable code.

# **2-9:** Null, Unknown and Never Types

## Null and Undefined Types

In TypeScript, we can use the `null` and `undefined` types to represent values that are intentionally absent.

Here's an example:

```
function printValue(value: string | null | undefined) {
  console.log(value ?? 'Value is null or undefined');
}

printValue('hello'); // prints "hello"
printValue(null); // prints "Value is null or undefined"
printValue(undefined); // prints "Value is null or undefined"

```

In this example, we have defined a function named `printValue` that can take a string, `null`, or `undefined`. We then use the nullish coalescing operator (`??`) to provide a default value if the value is null or undefined.

## Unknown Type

In TypeScript, we can use the `unknown` type to represent values whose type we do not yet know.

Here's an example:

```
function printValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(`Value is a string: ${value}`);
  } else if (value instanceof Array) {
    console.log(`Value is an array: ${value}`);
  } else {
    console.log(`Value is of unknown type: ${value}`);
  }
}

printValue('hello'); // prints "Value is a string: hello"
printValue([1, 2, 3]); // prints "Value is an array: 1,2,3"
printValue({ name: 'John', age: 30 }); // prints "Value is of unknown type: [object Object]"

```

In this example, we have defined a function named `printValue` that takes a parameter of type `unknown`. We then use type guards to determine the type of the value and print a message accordingly.

## Never Type

In TypeScript, we can use the `never` type to represent values that will never occur. This can happen when a function always throws an error or when a switch statement has exhaustive case handling.

Here's an example:

```
function throwError(message: string): never {
  throw new Error(message);
}

function printValue(value: string | number) {
  switch (typeof value) {
    case 'string':
      console.log(`Value is a string: ${value}`);
      break;
    case 'number':
      console.log(`Value is a number: ${value}`);
      break;
    default:
      throwError(`Unknown value: ${value}`);
  }
}

printValue('hello'); // prints "Value is a string: hello"
printValue(42); // prints "Value is a number: 42"
printValue(true); // throws an error with message "Unknown value: true"

```

In this example, we have defined a function named `throwError` that always throws an error. We then use this function in the `default` case of the switch statement to throw an error if the value is not a string or a number.

## Conclusion

In this blog post, we discussed the null, undefined, unknown, and never types in TypeScript. These types can help us write more robust and maintainable code. The `null` and `undefined` types represent values that are intentionally absent. The `unknown` type represents values whose type we do not yet know. The `never` type represents values that will never occur.

# **2-10:** Ternary Operator and Nullish Coalescing Operator

## Ternary Operator

The ternary operator (`? :`) is a feature of TypeScript that allows us to write a shorthand if statement. Here's an example:

```
const age = 30;
const message = age >= 18 ? 'You are an adult' : 'You are a minor';

console.log(message); // prints "You are an adult"

```

In this example, we are using the ternary operator to check if the `age` variable is greater than or equal to 18. If it is, the `message` variable is set to "You are an adult". Otherwise, the `message` variable is set to "You are a minor".

## Nullish Coalescing Operator

The nullish coalescing operator (`??`) is a feature of TypeScript that allows us to provide a default value for variables that are `null` or `undefined`. Here's an example:

```
const name: string | undefined = undefined;
const message = `Hello, ${name ?? 'world'}!`;

console.log(message); // prints "Hello, world!"

```

In this example, we are using the nullish coalescing operator to provide a default value for the `name` variable if it is `null` or `undefined`.

## Conclusion

In this blog post, we discussed the ternary operator and the nullish coalescing operator in TypeScript. These operators can help us write more concise and readable code. The ternary operator allows us to write a shorthand if statement, and the nullish coalescing operator allows us to provide a default value for variables that are `null` or `undefined`.

<h1 align="center">-END-</h1>

# Module-3: Explore Advance Types of Typescript

## 3-1: Type Assertion

Type assertion is a way to tell the TypeScript compiler that a variable is of a specific type. It is like a type cast in other languages. There are two ways to do type assertion in TypeScript:

- Using the `< >` syntax
- Using the `as` keyword

Type assertion is used when the developer knows more about the type of a value than TypeScript does. It can also be used to convert a value to a more specific type.

Here's an example of using type assertion with the `< >` syntax:

```
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

```

Here's an example of using type assertion with the `as` keyword:

```
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

```

Note that type assertion is different from type conversion. Type conversion is when a value is actually changed to a different type, whereas type assertion only tells TypeScript to treat the value as if it is a different type.

## 3-2: Interface vs Type

In TypeScript, both `interface` and `type` can be used to define object types. However, there are some differences between them.

### Interface

An interface is a way to define a contract for an object. It specifies the properties and their types that an object must have. Interfaces can also extend other interfaces.

Here's an example of an interface for a `Person` object:

```
interface Person {
  name: string;
  age: number;
}

```

### Type

A type is similar to an interface, but it can also be used to define other types, such as primitives, unions, and intersections. Types can also be extended using intersection types.

Here's an example of a type for a `Person` object:

```
type Person = {
  name: string;
  age: number;
}

```

One advantage of using `type` is that it can be used with other types to create more complex types. For example, here's how you could use `type` to create a `User` type that extends the `Person` type:

```
type User = Person & {
  email: string;
}

```

Overall, both `interface` and `type` can be used to define object types in TypeScript. The choice between them depends on the specific use case and personal preference.

## 3-3: Introduction of Generic in Type

Generics are a way to create reusable code components that can work with different types. They allow for the creation of functions, classes, and interfaces that can work with a variety of types without being specific to one particular type.

Here's an example of a generic function that takes an array of any type and returns an array of the same type:

```
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

```

In this example, `T` is a type variable that represents any type. The function takes an array of type `T` and returns an array of the same type.

Generics can also be used with interfaces and classes. Here's an example of a generic interface:

```
interface Pair<T, U> {
  first: T;
  second: U;
}

```

In this example, `Pair` is an interface with two type parameters, `T` and `U`. It specifies that any object that implements the interface must have a `first` property of type `T` and a `second` property of type `U`.

Overall, generics are a powerful feature of TypeScript that allow for the creation of reusable code components that can work with different types. They are commonly used in libraries and frameworks to create flexible and extensible code.

## 3-4: Introduction of Generic in Type

Generics are a way to create reusable code components that can work with different types. They allow for the creation of functions, classes, and interfaces that can work with a variety of types without being specific to one particular type.

Here's an example of a generic interface:

```
interface Pair<T, U> {
  first: T;
  second: U;
}

```

In this example, `Pair` is an interface with two type parameters, `T` and `U`. It specifies that any object that implements the interface must have a `first` property of type `T` and a `second` property of type `U`.

Overall, generics are a powerful feature of TypeScript that allow for the creation of reusable code components that can work with different types. They are commonly used in libraries and frameworks to create flexible and extensible code.

## 3-5: Introduction of Generic in Type

Generics are a way to create reusable code components that can work with different types. They allow for the creation of functions, classes, and interfaces that can work with a variety of types without being specific to one particular type.

Here's an example of a generic function that takes an array of any type and returns an array of the same type:

```
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

```

In this example, `T` is a type variable that represents any type. The function takes an array of type `T` and returns an array of the same type.

Overall, generics are a powerful feature of TypeScript that allow for the creation of reusable code components that can work with different types. They are commonly used in libraries and frameworks to create flexible and extensible code.

## 3-6: Constraints in Generics

Generic types can be constrained to a specific set of types using the `extends` keyword. This allows for the creation of flexible and reusable code components that can work with a subset of types.

Here's an example of a generic function that takes an array of objects and returns an array of objects with a specific property:

```
function filterBy<T, K extends keyof T>(arr: T[], prop: K, value: T[K]): T[] {
  return arr.filter(obj => obj[prop] === value);
}

```

In this example, the generic type `K` is constrained to be a key of the type `T`. This allows us to access a specific property of the objects in the array using the `prop` parameter.

Overall, constraints in generics are a powerful feature of TypeScript that allow for the creation of flexible and reusable code components that can work with a subset of types. They are commonly used in libraries and frameworks to create type-safe and efficient code.

## \***\*3-7: Generic Constraints Using Key Of Part 1\*\***

The `keyof` keyword in TypeScript is used to obtain the union type of all the property names of an object type. It allows for more precise type annotations and enables type-safe access to object properties without using string literals.

For example, given the following type:

```
type Person = {
  name: string;
  age: number;
  email: string;
}

```

We can use the `keyof` keyword to obtain the union of all property names:

```
type PersonKeys = keyof Person; // "name" | "age" | "email"

```

This allows us to create more generic functions that work with any object type that has certain properties. For example, here's a function that takes an object and a property name, and returns the value of that property:

```
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

```

In this example, `K` is constrained to be a key of the type `T`. This ensures that any property accessed using the `key` parameter actually exists on the object `obj`. The return type `T[K]` represents the type of the property accessed.

Overall, the `keyof` keyword is a powerful feature of TypeScript that enables more precise type annotations and type-safe access to object properties.

## 3-8: Asynchronous TypeScript

TypeScript supports asynchronous programming using the `async` and `await` keywords. These keywords allow you to write asynchronous code that looks and behaves like synchronous code.

Here's an example of an asynchronous function that fetches data from a server:

```
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

```

In this example, the `async` keyword is used to define an asynchronous function. The function uses the `await` keyword to wait for the results of the `fetch` function, which returns a `Promise` that resolves to a `Response` object. The `await` keyword is also used to wait for the results of the `text` method, which returns a `Promise` that resolves to a string.

The `Promise` type is a built-in type in TypeScript that represents an asynchronous operation that may or may not resolve to a value. It is used extensively in asynchronous programming to handle the results of asynchronous operations.

Overall, asynchronous programming is a powerful feature of TypeScript that enables you to write efficient and responsive code that can handle long-running tasks without blocking the main thread. It is commonly used in web development to fetch data from servers, handle user input, and perform other tasks that require non-blocking I/O operations.

## 3-9: Conditional Types

Conditional types in TypeScript allow for the creation of types that depend on other types. They are useful for creating complex types that depend on runtime conditions.

Here's an example of a conditional type that returns a different type based on whether a value is an array or not:

```
type ArrayOrNot<T> = T extends any[] ? T : T[];

```

In this example, the `ArrayOrNot` type is a conditional type that takes a type parameter `T`. It uses the `extends` keyword to check if `T` is an array type. If it is, it returns `T`. If it isn't, it returns an array containing `T`.

Conditional types can also be used with mapped types to create more complex types that depend on runtime conditions. Here's an example of a mapped type that applies a certain modifier to all properties of an object type if they are of a certain type:

```
type ModifiableProperties<T> = {
  [K in keyof T]: T[K] extends number ? T[K] & {unit: string} : T[K];
}

```

In this example, the `ModifiableProperties` type is a mapped type that takes an object type `T`. It applies a certain modifier to all properties of `T` if they are of type `number`. The modifier adds a `unit` property to the number, making it a `number` with a unit.

Overall, conditional types are a powerful feature of TypeScript that allow for the creation of complex types that depend on runtime conditions. They are commonly used in libraries and frameworks to create flexible and extensible code.Mapped type typescript

## 3-10: Mapped types in TypeScript

Mapped types in TypeScript allow you to create new types based on existing types by applying transformations to each property in the original type. They provide a way to generate new types based on the structure of existing types, making it easier to create variations or subsets of types.

The syntax for defining a mapped type is as follows:

```
type MappedType = {
  [Property in keyof OriginalType]: Transformation
};

```

Here, `MappedType` is the name of the new type you're defining. Property represents each `property` in the `OriginalType`, and `Transformation` defines the type transformation that should be applied to each property.

For example, let's say we have an interface `Person`:

```
interface Person {
  name: string;
  age: number;
}

```

We can create a mapped type called `PartialPerson` that makes all properties of `Person` optional:

```
type PartialPerson = {
  [Property in keyof Person]?: Person[Property];
};

```

In this case, `PartialPerson` will have the same properties as `Person`, but each property will be optional. So we can do the following:

```
const person: PartialPerson = {
  name: "John"
};

```

Another useful feature of mapped types is the ability to create read-only or mutable versions of existing types:

```
type ReadonlyPerson = {
  readonly [Property in keyof Person]: Person[Property];
};

type MutablePerson = {
  -readonly [Property in keyof Person]: Person[Property];
};

```

In the `ReadonlyPerson` type, all properties are made read-only, meaning you can't assign new values to them once they're initialized. On the other hand, the `MutablePerson` type removes the `readonly` modifier, allowing properties to be modified.

Mapped types are versatile and can be used in various scenarios to manipulate and transform types based on existing ones. They provide a powerful way to generate new types dynamically, based on the structure of other types.

Note: This explanation covers the basic concept of mapped types in TypeScript. The language evolves over time, so there may be additional features or changes introduced beyond my knowledge cutoff in September 2021. It's always a good idea to consult the official TypeScript documentation for the most up-to-date information.

<h1 align="center">-END-</h1>

# Module 4: Object-Oriented Programming in typescript

## 4-1: Introduction to Object-Oriented Programming

Object-Oriented Programming (OOP) in TypeScript follows the same principles as other object-oriented languages. TypeScript is a statically typed superset of JavaScript that adds type annotations and additional features to enhance the development experience. It brings OOP concepts and features to JavaScript, making it easier to build large-scale applications.

Here's an introduction to OOP in TypeScript:

## 4-3: How to Create class

1. `Classes`: `Classes` are the fundamental building blocks of object-oriented programming in TypeScript. They serve as blueprints for creating objects that share common properties and behaviors. You can define a class using the class keyword. Here's an example:

```
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

```

In the above example, the `Person` class has two properties (`name` and `age`), a constructor to initialize those properties, and a `sayHello` method to display a greeting.

## 4-3: How to Create object

2. `Objects`: `Objects` are instances of classes. You can create an object by using the `new` keyword followed by the class name and any required arguments. Here's an example:

```
const person1 = new Person("Alice", 25);
person1.sayHello(); // Output: Hello, my name is Alice and I'm 25 years old.

```

The `person1` object is created from the `Person` class and can invoke its methods or access its properties.

## 4-3: Inheritence

3. `Inheritance`: In TypeScript, you can create class hierarchies using `inheritance`. A subclass can inherit properties and methods from a superclass, allowing for code reuse and specialization. The `extends` keyword is used to establish an `inheritance` relationship. Here's an example:

```
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  study(): void {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

```

In the above example, the `Student` class extends the `Person` class, inheriting its properties and methods. It also introduces a new property (`grade`) and a `study` method specific to students.

## 4-8: Polymorphism

4. Polymorphism: Polymorphism allows objects of different classes to be treated as instances of a common superclass. TypeScript supports polymorphism through method overriding. Subclasses can override methods inherited from the superclass to provide their own implementation. Here's an example:

```
class Animal {
  makeSound(): void {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("The cat meows.");
  }
}

```

In this example, both `Dog` and `Cat` classes inherit the `makeSound` method from the Animal class but provide their own implementation. This allows you to treat objects of `Dog` and `Cat` as instances of the common `Animal` superclass while calling the `makeSound` method.

These are some of the key concepts of OOP in TypeScript. By leveraging these principles, you can create well-structured and maintainable code that models real-world entities and promotes code reuse.

## 4-4: Type Guards / Type Narrowing

Type guards, also known as type narrowing, are a feature in TypeScript that allow you to narrow down the type of a variable within a conditional block based on certain conditions. This narrowing is done through runtime checks that refine the type of the variable.

TypeScript uses type guards to help you write safer code by providing more specific type information. By narrowing down the type, you can access properties and methods that are specific to that particular type, without TypeScript raising any compilation errors.

There are several ways to perform type narrowing in TypeScript:

1. typeof type guards: You can use the typeof operator to narrow down the type based on the JavaScript runtime type of a value. For example:

```
function printLength(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.length); // TypeScript knows `value` is a string
  } else {
    console.log('Not a string');
  }
}

```

2. `instanceof` type guards: The `instanceof` operator allows you to narrow down the type based on the class or interface a value was instantiated from. For example:

```
class Foo {
  bar() {
    console.log('Hello');
  }
}

function doSomething(value: Foo | number) {
  if (value instanceof Foo) {
    value.bar(); // TypeScript knows `value` is an instance of `Foo`
  } else {
    console.log('Not an instance of Foo');
  }
}

```

3. `user-defined type guards`: You can create your own type guards by defining functions that return a boolean value based on specific type conditions. For example:

```
interface Square {
  sideLength: number;
}

interface Circle {
  radius: number;
}

function isSquare(shape: Square | Circle): shape is Square {
  return (shape as Square).sideLength !== undefined;
}

function calculateArea(shape: Square | Circle) {
  if (isSquare(shape)) {
    console.log('Area of square:', shape.sideLength * shape.sideLength);
  } else {
    console.log('Area of circle:', Math.PI * shape.radius * shape.radius);
  }
}

```

These are just a few examples of how you can perform type narrowing using type guards in TypeScript. They help you write more robust code by leveraging the type system to catch potential errors and provide better code completion and static analysis.

## 4-5: Getters and Setters in Typescript

In TypeScript, getters and setters are used to define special methods that allow you to access and modify the values of an object's properties. They provide a way to control how properties are accessed and updated, and they can be helpful for maintaining data integrity and adding additional logic.

Here's an example of how to define getters and setters in TypeScript:

```
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // Getter
  get name(): string {
    return this._name;
  }

  // Setter
  set name(newName: string) {
    this._name = newName;
  }
}

// Creating an instance of Person
const person = new Person("John");

// Accessing the property using the getter
console.log(person.name); // Output: John

// Updating the property using the setter
person.name = "Jane";

// Accessing the property again
console.log(person.name); // Output: Jane

```

In the example above, the `Person` class has a private property `\_name`. It also has a `getter` `name()` and a ` setter`` name(newName: string) `. The getter returns the value of the `\_name` property, and the setter allows you to update the value of `\_name`.

By using getters and setters, you can perform additional operations or validations before getting or setting the value of a property. For example, you could check if the provided name is valid or trigger certain actions when the property is accessed or modified.

Note: It's a convention in TypeScript to prefix private properties with an underscore, which differentiates them from the corresponding getters and setters.

## 4-6: Static in Class typescript

In TypeScript, static members in a class work similarly to how they do in other object-oriented languages like Java or C#. Here's how you can use static members in TypeScript:

1. Static properties: Static properties are declared using the "static" keyword and are shared across all instances of the class. They are accessed using the class name itself, without the need for an instance. Here's an example:

```
class MyClass {
  static count: number = 0;

  constructor() {
    MyClass.count++;
  }

  static getCount(): number {
    return MyClass.count;
  }
}

```

In the above example, the static property `count` is incremented every time a new instance of `MyClass` is created. The static method `getCount()` can be called directly on the `class` to retrieve the current count value.

2. Static methods: Static methods are declared using the "static" keyword and can be called on the class itself without creating an instance. They can only access other static members of the class. Here's an example:

```
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}

```

In the above example, the `add()` method is a static method that can be called using `MathUtils.add(3, 5)` without creating an instance of the `MathUtils` class.

It's important to note that static members are associated with the class itself and not with individual instances of the class. They are initialized only once when the class is loaded, and changes to their values are reflected across all instances and accessed directly on the class name.

## 4-9: Abstraction typescript

In TypeScript, abstraction refers to the concept of creating abstract classes or interfaces that define the common structure and behavior of related objects or classes. It allows you to define a blueprint for classes to follow without specifying the implementation details. Abstraction helps in achieving code reusability, modularity, and maintainability.

There are two primary ways to achieve abstraction in TypeScript:

1. Abstract Classes: An abstract class is a base class that cannot be instantiated directly. It serves as a blueprint for derived classes, which inherit its properties and methods. Abstract classes can contain both concrete (implemented) and abstract (unimplemented) methods. Abstract methods are declared but do not provide an implementation within the abstract class. Instead, derived classes must implement these abstract methods. Here's an example:

```
abstract class Animal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move(); // Output: Moving...

```

2. Interfaces: Interfaces in TypeScript define contracts for objects to follow. They describe the structure and behavior of an object without providing any implementation details. By implementing an interface, a class must adhere to the interface's structure. Here's an example:

```
interface Animal {
  makeSound(): void;
  move(): void;
}

class Dog implements Animal {
  makeSound(): void {
    console.log('Woof!');
  }

  move(): void {
    console.log('Moving...');
  }
}

const dog: Animal = new Dog();
dog.makeSound(); // Output: Woof!
dog.move(); // Output: Moving...

```

By using abstract classes and interfaces, you can achieve abstraction in TypeScript and define common contracts or blueprints for classes to follow. This promotes code organization, extensibility, and flexibility in your TypeScript projects.

## 4-10: Typescript Encapsulation

Encapsulation is a concept in object-oriented programming that involves bundling data and the methods that operate on that data into a single unit called a class. TypeScript, being an object-oriented programming language, supports encapsulation.

In TypeScript, encapsulation is achieved through the use of access modifiers, which control the visibility and accessibility of class members (properties and methods). There are three access modifiers available in TypeScript:

1. Public: The public access modifier allows class members to be accessed from anywhere, both within the class and from external code.

2. Private: The private access modifier restricts the access of class members to within the class that defines them. They cannot be accessed from outside the class.

3. Protected: The protected access modifier allows class members to be accessed within the class that defines them and in its subclasses. They cannot be accessed from outside the class hierarchy.

Here's an example that demonstrates encapsulation in TypeScript:

```
class Car {
  private brand: string;
  private speed: number;

  constructor(brand: string) {
    this.brand = brand;
    this.speed = 0;
  }

  accelerate(speed: number): void {
    this.speed += speed;
  }

  getSpeed(): number {
    return this.speed;
  }
}

const myCar = new Car('Tesla');
myCar.accelerate(50);
console.log(myCar.getSpeed()); // Output: 50
// myCar.speed; // Error: Property 'speed' is private and only accessible within class 'Car'

```

In the example above, the `brand` and `speed` properties of the `Car` class are marked as private. They can only be accessed and modified within the class itself. The `accelerate` method modifies the `speed` property, and the `getSpeed` method allows external code to access the current speed of the car.

By encapsulating the properties and providing controlled access through methods, encapsulation helps maintain data integrity and provides a level of abstraction that allows for better code organization and maintenance.
