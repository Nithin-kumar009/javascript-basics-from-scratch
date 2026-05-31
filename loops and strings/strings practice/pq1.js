/* prompt the user to enter their full name . Generate a username for themm bssed on the inpot.
stsrt username with @, followed by their full name and ending with the full name length.*/
let fullName=prompt("enter your full name without spaces");
let username= "@" + fullName + fullName.length;

console.log(username);