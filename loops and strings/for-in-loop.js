// for in loop - used to iterate keys and their values in an object
let student={
    studentName:"Nithin",
    age:20,
    gender:"male",
    isPass: true

};
for(let key in student){
    console.log("key=",key, "value=",student[key]);
}
