import jacketList from "./jackets.js";

const productContainer = document.querySelector(".product-list");

jacketList.forEach((jacket) => {
    productContainer.innerHTML += `<div class="products">
    <img src="${jacket.img}">
    <h3>${jacket.name}</h3>
    <i class="far fa-heart"></i>
    <p>${jacket.category}</p>
    <p><span>${jacket.price}</span></p> 
    <p class="color">3 colors</p>
    <a href="product.html" class="cta cta-small">Buy</a>
    </div> `
});