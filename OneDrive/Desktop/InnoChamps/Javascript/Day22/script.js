const API = "https://fakestoreapi.com/products"

let allProducts = [];
let filteredProducts = [];
let timer;

////////////////////////////////////////

// Pagination
let currentPage = 1;
const productsPerPage = 4;

////////////////////////////////////////

// Fetch Products

async function getProducts(){
    try{
        document.getElementById("loading").innerText =
            "Loading Products.....";

        const response = await fetch(API);
        const data = await response.json();

        console.log(data);

        allProducts = data;
        filteredProducts = data;

        displayProducts(filteredProducts);

        document.getElementById("loading").innerText = "";
    }

    catch(error){
        document.getElementById("loading").innerText =
            "Failed to load the products";

        console.log(error)
    }
}

////////////////////////////////////////

// Display Products

function displayProducts(products){
    const container = document.getElementById("container");

    container.innerHTML = "";

    ////////////////////////////////////////

    // Pagination Logic

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const paginatedProducts =
        products.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {

        container.innerHTML += `
        <div class="card">
            <img src="${product.image}"/>
            <h3>${product.title}</h3>
            <p> Rs ${product.price}</p>
            <p> Rs ${product.category}</p>
        </div>
        `
    })
}

////////////////////////////////////////////////////

// Search products

function searchProducts(){
    const searchText =
        document.getElementById("searchInput")
        .value.toLowerCase();

    filteredProducts =
        allProducts.filter(product => {

        return product.title
            .toLowerCase()
            .includes(searchText);

    });

    currentPage = 1;

    document.getElementById("pageNumber").innerText =
        currentPage;

    displayProducts(filteredProducts);
}

////////////////////////////////////////////////////