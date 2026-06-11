function login_validation(){
    let email=document.getElementById('user_email').value;
    let password=document.getElementById('user_password').value;
    if(email==="rahul@gmail.com" && password==="nithin009"){
        alert("login success");

    }
    else{
        alert("login failed");
    }
}