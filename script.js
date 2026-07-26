alert("Script Loaded!");

// ===============================
// WeTop v3 - Shopping Cart
// ===============================

// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product
function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    saveCart();

    console.log(cart);

    alert("✅ " + name + " added to cart!");
}

// Get cart
function getCart() {
    return cart;
}

// Remove product
function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    location.reload();

}
