
const newTitle = document.querySelector("title")
const jacketInfo = document.querySelector(".productcontainer")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const baseUrl = "https://www.malvinsdatter.no/wp-json/wc/store/products/" + id;

console.log(baseUrl)

async function getJacket() {

    try {
        const response = await fetch(baseUrl);
        const product = await response.json();

        jacketInfo.innerHTML += `<div class="jacket">
        <h1>${product.name}</h1>
        <img src="${product.images[0].src}">
        <div>
            <div class="jacket-details">
                <p>${product.categories[0].name}</p>
                <p class="price">$${product.prices.price}</p>
                <p><i>${product.description}</i></p>
            </div>
            <div class="jacket-colors">
            <p>Colors:</p>
                <div class="flex-colors">
                  <span class="circle-red"></span>
                  <p>Red</p>
                </div>
                <div class="flex-colors">
                  <span class="circle-blue"></span>
                  <p>Blue</p>
                </div>
                <div class="flex-colors">
                  <span class="circle-yellow"></span>
                  <p>Yellow</p>
                </div> 
            </div>
            <div  class="size_cta">
              <label for="sizes">Size:</label>
              <select name="sizes" id="sizes">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
              </select>
            </div>
        </div>
        </div>`

        newTitle.innerHTML += `${product.name}`;

    } catch (error) {
        jacketInfo.innerHTML += `An error has occured, please return to main page or contact us`;
    }

}

getJacket();

