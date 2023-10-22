# TypeScript Basic Types (Primitive Types)

TypeScript provides a range of primitive types to represent fundamental data values. These types are crucial for defining variables, functions, and data structures within your TypeScript code. It's essential to understand the distinction between implicit and explicit typing in TypeScript.

## Implicit Typing

**Implicit typing** is a TypeScript feature that automatically infers the type of a variable based on its initial value or usage in the code. In other words, TypeScript can determine the variable's type without the need for explicit type annotations. For example, when you declare a variable and assign it a value, TypeScript will analyze the value to determine its type.

```typescript
let x = 42; // TypeScript infers 'x' as a number
let name = "John"; // TypeScript infers 'name' as a string
```

Implicit typing is a powerful feature that simplifies code while still providing type safety.

## Explicit Types

**Explicit types** are when we intentionally provide the type using a special TypeScript syntax. This is particularly useful in scenarios where implicit typing might not provide the desired type or where you want to add clarity to your code. You explicitly specify the type of a variable, parameter, or return value using a colon `:` followed by the type.

```typescript
let age: number = 30; // 'age' explicitly defined as a number
let greeting: string = "Hello, TypeScript!"; // 'greeting' explicitly defined as a string
```

Explicit types are valuable when you want to enforce specific types or when TypeScript's inference isn't clear enough for your needs. They also improve code readability and maintainability.

## Available Primitive Types

Some of the commonly used primitive types in TypeScript include:

- **number:** Represents numeric values, including integers and floating-point numbers.
- **string:** Represents text values.
- **boolean:** Represents true or false values.
- **null and undefined:** Represents the absence of a value. Variables can have these types or values.
- **void:** Typically used as the return type for functions that don't return a value.
- **symbol:** Represents a unique, immutable value primarily used as object property keys.
- **bigint:** Represents large integers (introduced in ECMAScript 2020).

Understanding these basic types and when to use implicit or explicit typing is fundamental for effective TypeScript development.

Remember that as your TypeScript projects grow, you'll also work with more complex types, such as arrays, objects, and custom-defined types, to represent structured data and maintain code organization and clarity.