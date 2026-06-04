const input=require('prompt-sync')();

let a=parseInt(input("enter the number:"));
console.log(a%3==0? `${a} is a multiple of 3`: ` ${a} is not a multiple of 3`);