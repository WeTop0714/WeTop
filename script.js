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
// =========================
// Flash Sale Countdown
// =========================

let totalSeconds = 24 * 60 * 60;

setInterval(function(){

let hours = Math.floor(totalSeconds / 3600);

let minutes = Math.floor((totalSeconds % 3600) / 60);

let seconds = totalSeconds % 60;

const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

if(h && m && s){

h.innerText = String(hours).padStart(2,"0");
m.innerText = String(minutes).padStart(2,"0");
s.innerText = String(seconds).padStart(2,"0");

}

if(totalSeconds > 0){

totalSeconds--;

}

},1000);
// =====================
// Product Slider
// =====================

const slider=document.getElementById("productSlider");

const next=document.getElementById("nextBtn");

const prev=document.getElementById("prevBtn");

if(slider && next && prev){

next.onclick=function(){

slider.scrollBy({

left:350,

behavior:"smooth"

});

};

prev.onclick=function(){

slider.scrollBy({

left:-350,

behavior:"smooth"

});

};

}
// ===========================
// Scroll Reveal
// ===========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(function(section){

const top = section.getBoundingClientRect().top;

const visible = window.innerHeight - 120;

if(top < visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
