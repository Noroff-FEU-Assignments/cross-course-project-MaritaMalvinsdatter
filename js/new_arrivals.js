import jacketList from "./jackets.js";

const productContainer = document.querySelector(".product-list");

jacketList.forEach((jacket) => {
    productContainer.innerHTML += `<div class="products">
    <div class="product-img">
    <img src="${jacket.img}">
    </div>
    <h3>${jacket.name}</h3>
    <i class="far fa-heart"></i>
    <p>${jacket.category}</p>
    <p><span>${jacket.price}</span></p> 
    <p class="color">3 colors</p>
    <a href="product.html?id=${jacket.id}" class="cta cta-small">Buy</a>
    </div> `
});