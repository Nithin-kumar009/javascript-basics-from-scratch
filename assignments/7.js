const input=require('prompt-sync')();
let a=parseInt(input("enter the fist number :"));
let b=parseInt(input("enter the second number :"));
if(a>b){
    console.log(b, "is least");
}
if(a<b){
    console.log(a, "is least");
}
if(a==b){
    console.log(a, "is equal to ", b);
    
}