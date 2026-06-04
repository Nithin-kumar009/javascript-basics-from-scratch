const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let c = Number(prompt("Enter third number: "));

let arr=[a,b,c];
arr.sort((a,b)=> a-b);
console.log("ascending order",arr)