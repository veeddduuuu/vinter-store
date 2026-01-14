import { fetchProducts } from "./Data/products.js";
import { fetchProductById } from "./Data/products.js";

console.log("Vinter Web Ecom");

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const category = document.getElementById("category");

let allProducts = [];

function render(products){
    grid.innerHTML = products.map(p => `<h3>${p.name}</h3>
        <p>${p.category}</p>
        <p>${p.price}</p>
        <p>${p.description}</p>`).join('');
}

function applyFilters() {
    let filtered = allProducts;

    if(category.value !== "all"){
        filtered = filtered.filter(p => p.category === category.value);
    }

    if(search.value){
        filtered = filtered.filter(p=>p.name.toLowerCase().includes(search.value.toLowerCase()));
    }

    render(filtered);
}

category.addEventListener("change", applyFilters);
search.addEventListener("input", applyFilters);

fetchProducts().then(p => {
    allProducts = p;
    render(allProducts);
})
