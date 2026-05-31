/*
string - string is a sequence of characters used to represent ttex

creating a string - let str="nithin";
to fing length of the string - str.lrngth;
string indeces - str[0],str[1],str[2],str[3]...str[n]
*/
let str="saniya";
console.log("length of the name saniya is",str.length);
console.log(str[2]);

//string literals - a way to have embedded expressions in strings

let stringliteral=`this is a template literal `;
console.log(stringliteral);

// string interpolation - to create by doing substitution of place holders

let str1=`string text ${str} and ${stringliteral}`;
console.log(str1);
let str2=`we can do expressions also in template literal like 1+2+3 =${1+2+3}`;
console.log(str2);