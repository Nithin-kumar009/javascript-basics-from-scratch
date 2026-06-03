let input=require('prompt-sync')()
let num=parseInt(input("enter a number"))
if(num>=100 && num<=999){
    console.log("it is a three digit number");

}
else{
    console.log("not a three digit number")
}