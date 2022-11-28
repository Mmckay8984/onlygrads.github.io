

var SignUpBtm = document.getElementById("frmSignUpSubmit");
SignUpBtm.addEventListener("click", frmSignUpSubmit);


function frmSignUpSubmit(e){
    e.preventDefault();
    alert("sign up successful redirecting to Home page");
    window.location.href= "../index.html";
}