/* create a game where you start any random game number.
ask the user to keep guessing the number until the user enters correct value.
*/

let gameNum=69;
let usernum=Number(prompt("enter a number"));
while(usernum != gameNum){
    usernum=Number(prompt("you have entered wrong number, try again!"));

}
console.log("congratulations you guessed the right number! ")