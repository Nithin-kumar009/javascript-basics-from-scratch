//print number of items divisible by 3

let prices =[199, 129, 98, 78, 11, 171, 888, 1055,600,768];
let count=0;
for(const price of prices)
{
    if(price%3===0)
        count++;
}
console.log("no.of numbers divisible by3 is : ",count);