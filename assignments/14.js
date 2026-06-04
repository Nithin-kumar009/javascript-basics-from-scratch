const input=require('prompt-sync')();

let a=parseInt(input("enter the number:"));
console.log(a>0? `${a} is positive`: ` ${a} is not positive`);