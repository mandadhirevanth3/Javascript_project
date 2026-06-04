const CART_API = `${BASE_URL}/cart`;

// get cart items
function getCart() {
    fetch(CART_API)
        .then(response => response.json())
        .then(data => {
            displayCart(data);
        });
}

// Display cart
function displayCart(items) {
    const container = document.getElementById("cartContainer");
    container.innerHTML = "";
    
    let total = 0;

    items.forEach(item => {
        total += item.price;

        container.innerHTML += `
            <div class="card">
                <img src="${item.image}">
                <h3>${item.title}</h3>
                <h2>${item.price}</h2>
                <p>${item.category}</p>

                <button onclick="removeCart('${item.id}')">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        `Total : Rs. ${total}`;
}

// Remove from cart
function removeCart(id) {
    fetch(`${CART_API}/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        getCart();
    });
}

getCart();