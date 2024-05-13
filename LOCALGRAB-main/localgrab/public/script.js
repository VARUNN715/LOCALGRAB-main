// Sample JavaScript for handling order and total calculation
let orderList = [];
let total = 0;

function addToOrder(item, price) {
    orderList.push({ item, price });
    total += price;
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderListElement = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear existing content
    orderListElement.innerHTML = '';

    // Populate order list
    orderList.forEach((orderItem) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${orderItem.item} - $${orderItem.price.toFixed(2)}`;
        orderListElement.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = total.toFixed(2);
}

function checkout() {
    // Implement checkout logic (e.g., send order to server)
    alert('Checkout functionality will be implemented in the future!');
}

