/*logical operators - evaluate multipe expressions and gives output 
logical operators are basically 3 types:
1.AND - && - gives true, only when both expressions/conditions are true.
2.OR - || - gives true , when atleast ine condtition is true.
3.NOT - ! - makes true to false and false to true.*/

let a=5;
let b=6;
let cond1= a==b; //condition 1
let cond2= a!=b;//codition 2

console.log("cond1 && cond 2",cond1&&cond2); //and operation - output is false
console.log("cond1 || cond 2",cond1||cond2); // or operation - output is True 
console.log("!cond1",!cond1); // not operation - ouput is true