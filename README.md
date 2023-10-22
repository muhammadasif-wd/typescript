To create a Markdown document outlining the steps you mentioned, you can use the following template:

```markdown
# Setting up Node.js and TypeScript Environment

## Check Node.js Installation and Version

To check if Node.js is installed, open your terminal and run:

```bash
node -v
```

If Node.js is not installed, or you need to manage different Node.js versions, consider using [nvm](https://github.com/nvm-sh/nvm).

To check the version of Node.js installed:

```bash
node -v
```

## Install TypeScript Globally or for Your Project

If you haven't already installed TypeScript globally, you can do so with:

```bash
npm install -g typescript
```

To check the TypeScript version:

```bash
tsc --version
```

If you prefer to install TypeScript locally within your project:

```bash
npm install typescript --save-dev
```

## Compiling TypeScript to JavaScript

To compile a TypeScript file to JavaScript, use the following command:

```bash
tsc ./filename.ts
```

## Create a TypeScript Configuration File

To generate a TypeScript configuration file (tsconfig.json) for your project:

```bash
tsc --init
```

This command will create a `tsconfig.json` file that you can customize to configure your TypeScript project.

## Initialize Your Project with a `package.json` File

If you don't have a `package.json` file, you can create one quickly with default settings using:

```bash
npm init -y
```

## Install Nodemon for Running Code

Nodemon is a utility that will monitor for changes in your source code and automatically restart your server. You can install it with:

```bash
npm install nodemon --save-dev
```

## Use ts-node-dev for Compiling TypeScript

To compile and run TypeScript files easily during development, you can use `ts-node-dev`. First, install it with:

```bash
npm install ts-node-dev --save-dev
```

## Configure `tsconfig.json` for Development

To configure your `tsconfig.json` for development, change the `rootDir` and `outDir` settings to point to your source and output directories. Here's an example:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    // ... other options ...
  }
  // ... other configuration ...
}
```

Now, your TypeScript files in the `src` directory will be compiled to JavaScript in the `dist` directory.

This Markdown document provides an overview of setting up a Node.js and TypeScript environment, installing dependencies, and configuring your project for development.
```

You can customize this document as needed and use it as a reference for setting up your Node.js and TypeScript environment.