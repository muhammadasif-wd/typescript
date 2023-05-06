## 2-1 :Installation typescript , nvm & ts-node-dev

Type Script installation:

```sh
npm install typescript
```

Global installation:

```sh
sh npm install -g typescript
```

nvm installation:

```sh
npm install -g nvm
```

### How to change node version in your local computer?

```sh
nvm use node 19.8.2
```

( type your version )

### Typescript file run local computer

```sh
 tsc index.js
```

### Every time a file run updated

setup node package manager:

```sh
 npm init -y
```

```sh
 npm i nodemon
```

```sh
“start”: “nodemon index.js”
```

### কিভাবে typescript এর ফাইল javascript এ complied না করে node এ চালাতে পারি ?

আমরা এক্ষেত্রে ব্যাবহার করতে পারিঃ node js এর একটি প্যাকেজ ম্যানেজার সেটি হচ্ছেঃ

```sh
 npm i ts-node-dev
```

    or

```sh
npm i ts-node-dev --save-dev
```

এর পরের কাজ হচ্ছে, আমাদের যেখানে স্টার্ট করার command টি দেওয়া রয়েছে সেখানে,

```sh
ts-node-dev --respawn --transpile-only index.ts
```

setup node package manager:

```sh
 npm init -y
```

Install & setup nodemon:

```sh
npm i nodemon
```

```sh
“start”: “nodemon index.js”
```

### কিভাবে typescript এর ফাইল javascript এ complied না করে node এ চালাতে পারি ।

আমরা এক্ষেত্রে ব্যাবহার করতে পারিঃ node js এর একটি প্যাকেজ ম্যানেজার সেটি হচ্ছেঃ

```sh
 npm i ts-node-dev
```

or

```sh
 npm i ts-node-dev --save-dev
```

এর পরের কাজ হচ্ছে, আমাদের যেখানে স্টার্ট করার command টি দেওয়া রয়েছে সেখানে,

```sh
 ts-node-dev --respawn --transpile-only index.ts
```

Setup package manger

```sh
"start": "ts-node-dev --respawn --transpile-only server.ts”
```

এটাকে রিপ্লেছ করে দিলেই হবে।

### আমি কিভাবে আমার সব typescript এর ফাইল গুলো একটি ফোল্ডার এ রাখতে পারি…?

আমি যদি চাই আমার সুধু typescript এর ফাইল গুলো একটি folder থাকবে তাহলে আমরা tsconfig.json ফাইল এ জাব এর পর সার্চ করবো rootDir নামে অইখানে আপনি আপনার ফোল্ডার এর নামটি দিলেই হবে।

### আমি কিভাবে আমার সব javascript এর ফাইল গুলো একটি ফোল্ডার এ রাখতে পারি…?

আমি যদি চাই আমার সুধু javscript এর ফাইল গুলো একটি folder থাকবে তাহলে আমরা tsconfig.json ফাইল এ জাব এর পর সার্চ করবো outDir নামে অইখানে আপনি আপনার ফোল্ডার এর নামটি দিলেই হবে।
