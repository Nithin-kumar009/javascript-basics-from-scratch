// program to check the number is ecen or odd
const input=require('prompt-sync')();
let a=parseInt(input("enter a number to check even or odd : "));
if(a%2==0){
    console.log(a, " is a even number");
}
else{
    console.log(a, "is a odd number");
}