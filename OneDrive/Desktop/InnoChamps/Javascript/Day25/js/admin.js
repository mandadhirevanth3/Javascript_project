const PRODUCT_API = "http://localhost:3000/products";

let editId = null;

// GET PRODUCTS
function getAdminProducts() {

  fetch(PRODUCT_API)

    .then((response) => response.json())

    .then((data) => {

      displayProducts(data);

    });

}

// DISPLAY PRODUCTS
function displayProducts(products) {

  const container = document.getElementById("adminProducts");

  container.innerHTML = "";

  products.forEach((product) => {

    const card = document.createElement("div");

    card.className = "card";

    // IMAGE
    const image = document.createElement("img");

    image.src = product.image;

    image.width = 200;

    // TITLE
    const title = document.createElement("h2");

    title.innerText = product.title;

    // PRICE
    const price = document.createElement("h3");

    price.innerText = `₹${product.price}`;

    // CATEGORY
    const category = document.createElement("p");

    category.innerText = product.category;

    // DELETE BUTTON
    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {

      deleteProduct(product.id);

    });

    // EDIT BUTTON
    const editBtn = document.createElement("button");

    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", function () {

      editProduct(
        product.id,
        product.title,
        product.price,
        product.category,
        product.image
      );

    });

    // APPEND
    card.appendChild(image);

    card.appendChild(title);

    card.appendChild(price);

    card.appendChild(category);

    card.appendChild(editBtn);

    card.appendChild(deleteBtn);

    container.appendChild(card);

  });

}

// ADD PRODUCT
function addProduct() {

  const title = document.getElementById("title").value;

  const price = document.getElementById("price").value;

  const category = document.getElementById("category").value;

  const image = document.getElementById("image").value;

  const newProduct = {

    title,
    price,
    category,
    image

  };

  fetch(PRODUCT_API, {

    method: "POST",

    headers: {

      "Content-Type": "application/json"

    },

    body: JSON.stringify(newProduct)

  })

    .then((response) => response.json())

    .then(() => {

      clearForm();

      getAdminProducts();

    });

}

// DELETE PRODUCT
function deleteProduct(id) {

  fetch(`${PRODUCT_API}/${id}`, {

    method: "DELETE"

  })

    .then(() => {

      getAdminProducts();

    });

}

// EDIT PRODUCT
function editProduct(
  id,
  title,
  price,
  category,
  image
) {

  document.getElementById("title").value = title;

  document.getElementById("price").value = price;

  document.getElementById("category").value = category;

  document.getElementById("image").value = image;

  editId = id;

  const btn = document.getElementById("mainBtn");

  btn.innerText = "Update Product";

  btn.setAttribute(
    "onclick",
    "updateProduct()"
  );

}

// UPDATE PRODUCT
function updateProduct() {

  const updatedProduct = {

    title:
      document.getElementById("title").value,

    price:
      document.getElementById("price").value,

    category:
      document.getElementById("category").value,

    image:
      document.getElementById("image").value

  };

  fetch(`${PRODUCT_API}/${editId}`, {

    method: "PUT",

    headers: {

      "Content-Type": "application/json"

    },

    body: JSON.stringify(updatedProduct)

  })

    .then(() => {

      clearForm();

      const btn =
        document.getElementById("mainBtn");

      btn.innerText = "Add Product";

      btn.setAttribute(
        "onclick",
        "addProduct()"
      );

      getAdminProducts();

    });

}

// CLEAR FORM
function clearForm() {

  document.getElementById("title").value = "";

  document.getElementById("price").value = "";

  document.getElementById("category").value = "";

  document.getElementById("image").value = "";

}

// INITIAL LOAD
getAdminProducts();