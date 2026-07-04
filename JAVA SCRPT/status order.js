// ========================================
// FOOD FRAME STATUS ORDER
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    loadLatestOrder();

});


// ========================================
// LOAD ORDER TERAKHIR
// ========================================

function loadLatestOrder() {

    let orders =
        JSON.parse(
            localStorage.getItem("foodframeOrders")
        ) || [];

    if (orders.length === 0) {
        return;
    }

    let order =
        orders[orders.length - 1];

    displayOrder(order);

}


// ========================================
// TAMPILKAN DATA
// ========================================

function displayOrder(order) {

    document.getElementById("orderId").textContent =
        order.id;

    document.getElementById("brandName").textContent =
        order.brandName;

    document.getElementById("packageName").textContent =
        order.package;

    document.getElementById("statusBadge").textContent =
        order.status;

    updateProgress(order.status);

    loadTimeline(order);

}


// ========================================
// PROGRESS
// ========================================

function updateProgress(status) {

    let percent = 20;

    switch (status) {

        case "Menunggu Konfirmasi":
            percent = 20;
            activateStep(1);
            break;

        case "Brief Diterima":
            percent = 40;
            activateStep(2);
            break;

        case "Pembayaran Diterima":
            percent = 60;
            activateStep(3);
            break;

        case "Shooting":
            percent = 80;
            activateStep(4);
            break;

        case "Editing":
            percent = 90;
            activateStep(5);
            break;

        case "Selesai":
            percent = 100;
            activateStep(6);
            break;
    }

    document.getElementById("progressFill").style.width =
        percent + "%";

    document.getElementById("progressText").textContent =
        percent + "%";
}


// ========================================
// AKTIFKAN STEP
// ========================================

function activateStep(step) {

    for (let i = 1; i <= step; i++) {

        let circle =
            document.getElementById("s" + i);

        if (circle) {
            circle.classList.add("active-step");
        }

    }

}


// ========================================
// TIMELINE
// ========================================

function loadTimeline(order) {

    document.getElementById("timelineContent")
        .innerHTML = `
        <div class="timeline-item">
            <strong>Pesanan Dibuat</strong><br>
            ${order.orderDate}
        </div>
    `;
}


// ========================================
// SEARCH
// ========================================

document.getElementById("searchBtn")
.addEventListener("click", () => {

    let keyword =
        document.getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    let orders =
        JSON.parse(
            localStorage.getItem("foodframeOrders")
        ) || [];

    let result =
        orders.find(order =>
            String(order.id)
            .includes(keyword)

            ||

            order.brandName
            .toLowerCase()
            .includes(keyword)
        );

    if (!result) {

        alert(
            "Pesanan tidak ditemukan."
        );

        return;
    }

    displayOrder(result);

});