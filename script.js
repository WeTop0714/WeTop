// ===============================
// WeTop Cart System v4
// ===============================

// Load cart from Local Storage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart to Local Storage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product to cart
function addToCart(name, price, image) {

    let cart = getCart();

    cart.push({
        name: name,
        price: price,
        image: image
    });

    saveCart(cart);

    alert("✅ " + name + " added to cart!");
}
// Remove product
function removeFromCart(index) {

    let cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);

    location.reload();

}

// Clear cart
function clearCart() {

    localStorage.removeItem("cart");

    location.reload();

}
