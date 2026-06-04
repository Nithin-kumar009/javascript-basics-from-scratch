const input = require("prompt-sync")();

let a=parseInt(input("enter a number to check wheather it is a multiple of 3 or not  : " ));
if (a%3==0) {
    console.log(a, "is a multiple of 3");
}
else{
 console.log(a, "is not a multiple of three")
}