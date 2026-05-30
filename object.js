//object practice

const student={ //object creation and const means we cant re-declare or update in run time
    studentName:"nithin", //key:value pair
    age:20, //data_type=integer
    branch:"ai&ds", //data_type="string"
    percentage:82,
    isBoy:true //data_type=Boolean
};
const student2={
    name:"saniya",
    age:20,
    branch:"ai&ds",
    percenatge:90,
    isGirl:true
};
console.log(student.isBoy,student2.isGirl); //printing keys from both objects

console.log(student2) //fetching only one object

console.log(student,student2) //fetching both onjects with single command
