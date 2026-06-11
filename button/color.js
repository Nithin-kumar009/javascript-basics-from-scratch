function cc1(){
    document.getElementById('btn1').style.backgroundColor="blue";
}
function cc2(){
    document.getElementById('btn2').style.backgroundColor="blue";
}
function cc5(){
    document.getElementsByClassName('xyz')[0].style.backgroundColor="yellow";
}
function cc6(){
    let names=document.getElementsByTagName('input')[1].value;
    alert("name should be in uppwecase")
document.querySelector('.inputbox').value=names.toUpperCase()
}