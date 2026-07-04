document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.getElementById("loginEmail").value;

    let password =
    document.getElementById("loginPassword").value;

    let savedEmail =
    localStorage.getItem("email");

    let savedPassword =
    localStorage.getItem("password");

    console.log(savedEmail);
    console.log(savedPassword);

    if(
        email === savedEmail &&
        password === savedPassword
    ){

        localStorage.setItem(
            "isLogin",
            "true"
        );

        alert("Login Berhasil");

        window.location.href =
        "./HTML FILE/Landing page dan Home.html";

    }
    else{

        alert(
            "Email atau Password Salah"
        );

    }

});