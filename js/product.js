import products from "./jackets.js";

const newTitle = document.querySelector("title")
const jacketContainer = document.querySelector(".main")
const button = document.querySelectorAll(".cta-small")

const product = products.find(findJacket)

function findJacket(product) {
    if(product.id === "0003") {
        return true;
    }
}

console.log(product);


