const input=require('prompt-sync')();

let a=parseInt(input("enter the number:"));
console.log(a%7==0? `${a} is dvisible by 7`: ` ${a} is not divisible by 7`);