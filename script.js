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
function addToCart(name, price, image){
function addToCart(name, price, image){

    let cart = getCart();

    cart.push({
        name: name,
        price: price,
        image: image
    });

    saveCart(cart);

    updateCartCount();

    showToast("✅ " + name + " added to cart!");

}
// Remove product
function removeFromCart(index){

    let cart = getCart();

    cart.splice(index,1);

    saveCart(cart);

    updateCartCount();

    location.reload();

}

// Clear cart
function clearCart() {

    saveCart([]);

    updateCartCount();

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
// ===========================
// Live Cart Counter
// ===========================

function updateCartCount(){

const badge=document.getElementById("cart-count");

if(!badge) return;

const cart=getCart();

badge.innerText=cart.length;

}

updateCartCount();
// =========================
// Toast Notification
// =========================

function showToast(message){

const toast=document.getElementById("toast");

if(!toast) return;

toast.innerText=message;

toast.classList.add("show");

setTimeout(function(){

toast.classList.remove("show");

},2500);

}
// ===========================
// Quick View Modal
// ===========================

const modal = document.getElementById("productModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalPrice = document.getElementById("modalPrice");

const modalCartBtn = document.getElementById("modalCartBtn");

const closeModal = document.querySelector(".close-modal");

let currentProduct = null;

function openQuickView(name, price, image){

currentProduct = {
name:name,
price:price,
image:image
};

modalImage.src = image;

modalTitle.innerText = name;

modalPrice.innerText = "₹" + price;

modal.style.display = "flex";

}

closeModal.onclick = function(){

modal.style.display = "none";

};

window.onclick = function(event){

if(event.target == modal){

modal.style.display = "none";

}

};

modalCartBtn.onclick = function(){

addToCart(currentProduct.name,currentProduct.price,currentProduct.image);

modal.style.display = "none";

};
// ===========================
// Loader
// ===========================

window.addEventListener("load",function(){

const loader=document.getElementById("loader");

if(loader){

setTimeout(function(){

loader.classList.add("hide");

},700);

}

});
// ===========================
// Live Product Search
// ===========================

function searchProducts(){

const input=document.getElementById("searchInput");

if(!input) return;

const filter=input.value.toLowerCase();

const products=document.querySelectorAll(".product-card");

products.forEach(function(product){

const name=product.querySelector("h3").innerText.toLowerCase();

if(name.includes(filter)){

product.style.display="block";

}else{

product.style.display="none";

}

});

}
