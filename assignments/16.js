const input=require('prompt-sync')();

let a=parseInt(input("enter the number:"));
console.log(a%2==0? `${a} is an even number`: ` ${a} is not an even number `);