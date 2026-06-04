
//wtite a program to check if the number is positive or neative
const PromptSync = require("prompt-sync")();
let a=parseInt(PromptSync("enter the number to check it is positive or negative : "));
if (a>0) {
    console.log(a, "is a positve number");
}
if (a<0) {
    console.log(a, "is negative number");
} if(a===0) {
    console.log("the number is 0")
}