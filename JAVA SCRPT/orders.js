// ========================================
// FOOD FRAME - ORDERS.JS
// ========================================

// DATA PESANAN
let selectedPackage = "";
let selectedPrice = 0;

// ELEMENT
const packageButtons = document.querySelectorAll(".paket-btn");
const productCountInput = document.getElementById("productCount");

const summaryPackage = document.getElementById("summaryPackage");
const summaryProduct = document.getElementById("summaryProduct");
const summaryPrice = document.getElementById("summaryPrice");

const submitOrder = document.getElementById("submitOrder");

// ========================================
// PILIH PAKET
// ========================================

packageButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // hapus status aktif
        packageButtons.forEach((btn) => {
            btn.classList.remove("selected-package");
        });

        // aktifkan paket yang dipilih
        button.classList.add("selected-package");

        selectedPackage = button.dataset.paket;
        selectedPrice = button.dataset.harga;

        summaryPackage.textContent = selectedPackage;
        summaryPrice.textContent =
            "Rp" + Number(selectedPrice).toLocaleString("id-ID");
    });
});

// ========================================
// UPDATE JUMLAH PRODUK
// ========================================

productCountInput.addEventListener("input", () => {

    let jumlah = productCountInput.value;

    if (jumlah === "") {
        summaryProduct.textContent = "0 Produk";
    } else {
        summaryProduct.textContent =
            jumlah + " Produk";
    }

});

// ========================================
// VALIDASI FORM
// ========================================

function validateForm() {

    const brandName =
        document.getElementById("brandName").value.trim();

    const contactPerson =
        document.getElementById("contactPerson").value.trim();

    const whatsapp =
        document.getElementById("whatsapp").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const productCount =
        document.getElementById("productCount").value.trim();

    // cek paket
    if (selectedPackage === "") {
        alert("Silakan pilih paket terlebih dahulu.");
        return false;
    }

    // cek brand
    if (brandName === "") {
        alert("Nama Brand wajib diisi.");
        return false;
    }

    // cek PIC
    if (contactPerson === "") {
        alert("Contact Person wajib diisi.");
        return false;
    }

    // cek WA
    if (whatsapp === "") {
        alert("Nomor WhatsApp wajib diisi.");
        return false;
    }

    // minimal 10 digit
    if (whatsapp.length < 10) {
        alert("Nomor WhatsApp tidak valid.");
        return false;
    }

    // cek email
    if (email === "") {
        alert("Email wajib diisi.");
        return false;
    }

    // validasi email sederhana
    if (!email.includes("@")) {
        alert("Format email tidak valid.");
        return false;
    }

    // cek jumlah produk
    if (productCount === "") {
        alert("Jumlah produk wajib diisi.");
        return false;
    }

    return true;
}

// ========================================
// SIMPAN PESANAN
// ========================================

function saveOrder() {

    const orderData = {

        id: Date.now(),

        brandName:
            document.getElementById("brandName").value,

        contactPerson:
            document.getElementById("contactPerson").value,

        whatsapp:
            document.getElementById("whatsapp").value,

        email:
            document.getElementById("email").value,

        productCount:
            document.getElementById("productCount").value,

        package:
            selectedPackage,

        price:
            selectedPrice,

        paymentMethod:
            document.querySelector(
                'input[name="payment"]:checked'
            )?.parentElement.innerText || "Belum Dipilih",

        status:
            "Menunggu Konfirmasi",

        orderDate:
            new Date().toLocaleString("id-ID")
    };

    // ambil data lama
    let orders =
        JSON.parse(localStorage.getItem("foodframeOrders")) || [];

    // tambah data baru
    orders.push(orderData);

    // simpan kembali
    localStorage.setItem(
        "foodframeOrders",
        JSON.stringify(orders)
    );

}

// ========================================
// SUBMIT PESANAN
// ========================================

submitOrder.addEventListener("click", () => {

    if (!validateForm()) {
        return;
    }

    saveOrder();

    alert(
        "Pesanan berhasil dibuat!"
    );

    // redirect
    window.location.href =
        "./daftar transaksi.html";

});