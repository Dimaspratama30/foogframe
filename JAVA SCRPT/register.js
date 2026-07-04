document
    .getElementById("registerForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        let nama =
            document.getElementById("nama").value;

        let email =
            document.getElementById("email").value;

        let whatsapp =
            document.getElementById("whatsapp").value;

        let password =
            document.getElementById("password").value;

        let konfirmasi =
            document.getElementById("konfirmasi").value;

        if (password !== konfirmasi) {

            alert("Password tidak sama!");

            return;
        }

        localStorage.setItem("nama", nama);
        localStorage.setItem("email", email);
        localStorage.setItem("whatsapp", whatsapp);
        localStorage.setItem("password", password);

        document.getElementById("registerMessage")
            .innerHTML =
            "Registrasi berhasil, mengarahkan ke halaman login...";

        setTimeout(function () {

            window.location.href =
                "../index.html";

        }, 2000);

    });