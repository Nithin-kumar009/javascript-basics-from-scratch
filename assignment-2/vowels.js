let word = "javascript";

let count = 0;

for(let char of word){
    if("aeiou".includes(char)){
        count++;
    }
}

console.log("Vowels:", count);