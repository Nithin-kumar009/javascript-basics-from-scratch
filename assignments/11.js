const input=require('prompt-sync')();
let a = parseInt(input("eneter the first number : "));
let b = parseInt(input("enter the second number :"));
let c = parseInt(input("enter the third number : "));

let numbers = [a,b,c];
numbers.sort((a,b)=> b-a);
console.log("descending order : ",numbers);