import products from "./jackets.js";

const newTitle = document.querySelector("title")
const jacketInfo = document.querySelector(".jacketinfo")


var url = window.location.href;
var id = url.substring(url. lastIndexOf('=') + 1)

const product = products.find(findJacket)

function findJacket(product) {
    if(product.id === id) {
        jacketInfo.innerHTML += `<div class="test"> <h1>${product.name}</h1>
                            </div>`
        
    } 
}

console.log();


