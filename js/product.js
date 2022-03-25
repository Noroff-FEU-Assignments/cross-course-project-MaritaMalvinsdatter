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
        <div class="jacket-details>
            <p>${product.category}</p>
        </div>
        </div>`


        
    } 
}




