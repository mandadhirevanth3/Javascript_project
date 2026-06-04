const API = `${BASE_URL}/products`;

let allProducts = [];
let filteredProducts = [];

let currentPage = 1;
const productsPerPage = 4;

let timer;

/////////////////////////////////////////////////////
// Get Products
/////////////////////////////////////////////////////

function getProducts() {
    fetch(API)
        .then((response) => response.json())
        .then((data) => {

            allProducts = data;
            filteredProducts = data;

            displayProducts(filteredProducts);
        })
        .catch((error) => {
            console.log(error);
        });
}

/////////////////////////////////////////////////////
// Display Products
/////////////////////////////////////////////////////

function displayProducts(products) {

    const container =
        document.getElementById("productsContainer");

    container.innerHTML = "";

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;

    const paginatedProducts =
        products.slice(start, end);

    /////////////////////////////////////////////////////

    paginatedProducts.forEach((product) => {

        container.innerHTML += `

            <div class="card">

                <img src="${product.image}" />

                <h3>${product.title}</h3>

                <h2>$${product.price}</h2>

                <p>${product.category}</p>

                <button onclick="addToCart(${product.id})">
                    Add to cart
                </button>

            </div>

        `;
    });
}

/////////////////////////////////////////////////////
// Add To Cart
/////////////////////////////////////////////////////

function addToCart(id) {

    const product = allProducts.find((product) => {

        return Number(product.id) === Number(id);

    });

    fetch(`${BASE_URL}/cart`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)

    })
    .then(() => {

        alert("Product added to cart");

    })
    .catch((error) => {

        console.log(error);

    });
}




/////////////////////////////////////////////////////
// Search Products
function searchProducts() {

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    filteredProducts = allProducts.filter(product => {

        return product.title
            .toLowerCase()
            .includes(searchText);

    });

    currentPage = 1;

    document.getElementById("pageNumber").innerText =
        currentPage;

    displayProducts(filteredProducts);
}



//////////////////////
// Debouncing
function debounceSearch() {

    clearTimeout(timer);

    timer = setTimeout(() => {

        searchProducts();

    }, 500);
}



//////////////////////////////////////////////////////
// Filter Products
function filterProducts() {

    const category =
        document.getElementById("categoryFilter").value;

    if (category === "all") {

        filteredProducts = allProducts;

    } else {

        filteredProducts = allProducts.filter(product => {

            return product.category === category;

        });
    }

    currentPage = 1;

    document.getElementById("pageNumber").innerText =
        currentPage;

    displayProducts(filteredProducts);
}



//////////////////////////////////////////////////////
// Next Page
function nextPage() {

    const totalPages =
        Math.ceil(filteredProducts.length / productsPerPage);

    if (currentPage < totalPages) {

        currentPage++;

        document.getElementById("pageNumber").innerText =
            currentPage;

        displayProducts(filteredProducts);
    }
}



//////////////////////////////////////////////////////
// Previous Page
function previousPage() {

    if (currentPage > 1) {

        currentPage--;

        document.getElementById("pageNumber").innerText =
            currentPage;

        displayProducts(filteredProducts);
    }
}

getProducts();