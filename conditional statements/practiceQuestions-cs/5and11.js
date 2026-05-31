let num = Number(prompt("Enter a number to check divisibility by 5 and 11"));

if (num % 5 === 0 && num % 11 === 0) {
    console.log(num, "is divisible by both 5 and 11");
}
else if (num % 5 === 0) {
    console.log(num, "is divisible by 5");
}
else if (num % 11 === 0) {
    console.log(num, "is divisible by 11");
}
else {
    console.log(num, "is not divisible by 5 and 11");
}