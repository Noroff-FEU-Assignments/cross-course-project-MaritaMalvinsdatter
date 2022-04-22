
const baseUrl = "https://www.malvinsdatter.no/wp-json/wc/store/products";

const productContainer = document.querySelector(".product-list");

async function jacketList(url) {
    const response = await fetch(url);
    const jackets = await response.json();
    console.log(jackets);

    jackets.forEach((jacket) => {
        productContainer.innerHTML += `<div class="products">
        <div class="product-img">
        <img src="${jacket.images[0].src}">
        </div>
        <h3>${jacket.name}</h3>
        <p>${jacket.categories[0].name}</p>
        <p><span>$${jacket.prices.price}</span></p> 
        <a href="product.html?id=${jacket.id}" class="cta cta-small">Buy</a>
        </div> `
    });

}

jacketList(baseUrl);

