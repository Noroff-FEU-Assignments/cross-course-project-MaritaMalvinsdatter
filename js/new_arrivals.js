// Displaying the jackets + checking if favourites exists 

import jacketList from "./jackets.js";

const productContainer = document.querySelector(".product-list");

const favourite = getExistingFav();

jacketList.forEach((jacket) => {

    var cssHeart = "far";

    const doesFavExist = favourite.find(function (favheart) {
        // console.log(favheart);

        return favheart.id === jacket.id;
    })

    console.log(doesFavExist);

    if(doesFavExist) {
        cssHeart = "fas";
    }

    productContainer.innerHTML += `<div class="products">
    <div class="product-img">
    <img src="${jacket.img}">
    </div>
    <h3>${jacket.name}</h3>
    <i class="${cssHeart} fa-heart" data-id="${jacket.id}" data-name="${jacket.name}" data-price="${jacket.price}" data-img="${jacket.img}" data-category="${jacket.category}"></i>
    <p>${jacket.category}</p>
    <p><span>${jacket.price}</span></p> 
    <p class="color">3 colors</p>
    <a href="product.html?id=${jacket.id}" class="cta cta-small">Buy</a>
    </div> `
});

// Favorites section

const favIcons = document.querySelectorAll(".products i")

favIcons.forEach((icon) => {
    icon.addEventListener("click", handleClick);
});

function handleClick() {
    
    this.classList.toggle("far");
    this.classList.toggle("fas");

    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;
    const img = this.dataset.img;
    const category = this.dataset.category;

    // console.log(category);

    const currentFav = getExistingFav();

    const itemExists = currentFav.find((heart) => {
        return heart.id === id;
    });

    if(itemExists === undefined) {
        const item = {id: id, name: name, price: price, img: img, category: category};
        currentFav.push(item)
        saveFav(currentFav);
    } else {
        const newFav = currentFav.filter((fav) => fav.id !== id);
        saveFav(newFav);
    }
    
    // console.log("itemExists", itemExists);

    
}

function getExistingFav() {
    const fav = localStorage.getItem("favourites");

    if(fav === null) {
        return [];
    } else {
        return JSON.parse(fav);
    }
}

function saveFav(fav) {
    localStorage.setItem("favourites", JSON.stringify(fav));   
}

