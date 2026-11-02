let cart = [];

function addToCart(name, price) {

    let item = cart.find(food => food.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}

function displayCart() {

    let cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    if (cart.length === 0) {
        cartDiv.innerHTML = "Your cart is empty.";
    }

    let total = 0;

    cart.forEach((item, index) => {

        let amount = item.price * item.quantity;

        total += amount;

        cartDiv.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                x ${item.quantity}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function removeItem(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    displayCart();
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Please add food to your cart!");
        return;
    }

    alert("Your order has been placed successfully!");

    cart = [];

    displayCart();
}
