import products from "./jackets.js";

const newTitle = document.querySelector("title")
const jacketInfo = document.querySelector(".productcontainer")


var url = window.location.href;
var id = url.substring(url. lastIndexOf('=') + 1)

const product = products.find(findJacket)

function findJacket(product) {
    if(product.id === id) {
        jacketInfo.innerHTML += `<div class="jacket"> 
        <h1>${product.name}</h1>
        <img src="${product.img}">
        <div>
            <div class="jacket-details">
                <p>${product.category}</p>
                <p class="price">${product.price}</p>
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
        </div>`
        
    } 
}




