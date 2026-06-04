// program to check the number is three digit number or not
const input=require('prompt-sync')();
let a=parseInt(input("enter a number :"));
if(a>99 && a<=999){
    console.log(a, "is a 3 digit number");
}
else{
    console.log(a,"is not a 3 digit number");
}