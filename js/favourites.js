function getExistingFav() {
    const fav = localStorage.getItem("favourites");

    if(fav === null) {
        return [];
    } else {
        return JSON.parse(fav);
    }
}

const favourite = getExistingFav();

const productContainer = document.querySelector(".favourites-container");

favourite.forEach(fav => {
    productContainer.innerHTML += `<div class="product-list">
    <div class="products">
    <div class="product-img">
    <img src="${fav.img}">
    </div>
    <h3>${fav.name}</h3>
    <i class="fas fa-heart"></i>
    <p>${fav.category}</p>
    <p><span>${fav.price}</span></p> 
    <p class="color">3 colors</p>
    <a href="product.html?id=${fav.id}" class="cta cta-small">Buy</a>
    </div>
    </div>`

});