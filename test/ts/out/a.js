"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./module1/Invoice");
let age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
let mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
let ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
const instanceofA = new Invoice_1.Invoice('a', 'dd', '10');
