const input=require('prompt-sync')();

let a=parseInt(input("enter the number:"));
console.log((a>99 && a<=999)? `${a} is a three digit number`: ` ${a} is not a three digit number `);