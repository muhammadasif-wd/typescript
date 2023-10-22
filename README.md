# Setting Up a New TypeScript Project

This guide will walk you through the process of setting up TypeScript for a new project. It covers TypeScript installation, creating a basic project structure, running TypeScript code, and configuring your development environment.

## 1. Installing Node.js

First, ensure you have Node.js installed on your system. You can download it from the official website [Node.js](https://nodejs.org/). Installing Node.js will also include npm, the Node.js package manager.

Verify the installation by running the following commands in your terminal:

```bash
node -v
npm -v
```

If both commands display version numbers, Node.js and npm are successfully installed.

## 2. Installing TypeScript

To install TypeScript globally, run:

```bash
npm install -g typescript
```

This makes the `tsc` (TypeScript Compiler) command available globally.

## 3. Creating a Project Directory

Create a directory for your new TypeScript project:

```bash
mkdir my-typescript-project
cd my-typescript-project
```

## 4. Initializing a New npm Project

Initialize a new npm project. This command will create a `package.json` file with default settings:

```bash
npm init -y
```

## 5. Installing Development Dependencies

For development purposes, install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

Install [ts-node](https://www.npmjs.com/package/ts-node) for running TypeScript code easily:

```bash
npm install ts-node --save-dev
```

## 6. Creating a Basic Project Structure

Create a basic project structure with a source directory (e.g., `src`) and an output directory (e.g., `dist`).

```bash
mkdir src
mkdir dist
```

## 7. Setting Up TypeScript Configuration

Generate a TypeScript configuration file:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file. Configure the `tsconfig.json` file to match your project needs. Ensure that the `rootDir` points to your source directory and the `outDir` to your output directory. Example configuration:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    // ... other options ...
  }
}
```

## 8. Writing TypeScript Code

Now, you can start writing TypeScript code in the `src` directory. For example, create a file named `app.ts` and write some TypeScript code.

## 9. Running TypeScript Code

To run your TypeScript code during development, use `ts-node`:

```bash
npx ts-node src/app.ts
```

## 10. Building and Compiling TypeScript

When you're ready to compile your TypeScript code to JavaScript, use the TypeScript Compiler (`tsc`):

```bash
npx tsc
```

This will generate JavaScript files in the `dist` directory, based on your `tsconfig.json` configuration.

With these steps completed, your TypeScript environment is set up, and you can start developing your new project. Simply create your TypeScript files in the `src` directory, use `ts-node` for development, and compile your code to JavaScript with `tsc` when you're ready to deploy.

Your project structure and development environment are now ready for your TypeScript project.
