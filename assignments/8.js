const input=require('prompt-sync')();
let a=parseInt(input("enter the first number : "));
let b=parseInt(input("eneter the second number : "));
let c=parseInt(input("enter the third number : "));
if(a>=b && a>=c){
    console.log(a,"is the gratest number");

}
else if(b>=a && b>=c){
    console.log(b, "is the greatest number");

}
else {
    console.log(c, "is the greatest number");
}