let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
}

function loadCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartItems.appendChild(li);
    });

    if(cart.length === 0){
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }
}
