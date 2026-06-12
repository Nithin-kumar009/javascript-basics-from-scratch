let employees=[{eid:101,name:"Rahul Gandhi",esal:45000},
    {eid:102,name:"sonia gandhi",esal:55000},
    {eid:103,name:"priyanka gandhi",esal:65000}
    
]
function display_Data(){
    let rows="";
    for( let emp of employees){
        rows=rows+`<tr>
        <td>${emp.eid}</td>
        <td>${emp.name}</td>
        <td>${emp.esal}</td>
        </tr>`    }
document.getElementsByTagName('tbody')[0].innerHTML=rows;
}