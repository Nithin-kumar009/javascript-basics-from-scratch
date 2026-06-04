//to check wheather the number is divisible withh seven or not

const Prompt= require("prompt-sync")();

let a=parseInt(Prompt("enter the number, to check wheather it is divisible by 7 or not : "));
if(a%7===0){
console.log(a,"is divisible by 7");

}
else{
    console.log(a, "is not divisible by 7");
}

