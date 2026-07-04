document.addEventListener("DOMContentLoaded", loadTransactions);

function loadTransactions() {

    const tbody =
        document.getElementById("transactionTableBody");

    let orders =
        JSON.parse(
            localStorage.getItem("foodframeOrders")
        ) || [];

    if (orders.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="6">
                    Belum ada transaksi
                </td>
            </tr>
        `;

        return;
    }

    tbody.innerHTML = "";

    orders.forEach(order => {

        tbody.innerHTML += `
            <tr>
                <td>${order.id}</td>
                <td>${order.brandName}</td>
                <td>${order.package}</td>
                <td>${order.productCount}</td>
                <td>
                    Rp${Number(order.price)
                        .toLocaleString("id-ID")}
                </td>
                <td>${order.status}</td>
            </tr>
        `;
    });

}