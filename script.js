// =========================
// WeTop v3 JavaScript
// =========================

// Shopping cart
let cart = [];

// Add product to cart
function addToCart(name, price){

cart.push({
name:name,
price:price
});

alert("✅ " + name + " added to cart!");

console.log(cart);

}

// Wishlist
let wishlist = [];

function addToWishlist(name){

wishlist.push(name);

alert("❤️ " + name + " added to wishlist!");

console.log(wishlist);

}
