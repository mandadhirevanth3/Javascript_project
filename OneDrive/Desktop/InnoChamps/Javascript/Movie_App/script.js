const API = "https://api.tvmaze.com/search/shows?q=all";

let allMovies = [];
let filteredMovies = [];
let timer;


// Pagination

let currentPage = 1;
const moviesPerPage = 4;


// Fetch Movies

async function getMovies(){

    try{

        document.getElementById("loading").innerText =
            "Loading Movies.....";

        const response = await fetch(API);

        const data = await response.json();

        console.log(data);

        // Store only movie details

        allMovies = data.map(item => item.show);

        filteredMovies = allMovies;


        // Display Genre Dropdown

        loadGenres();


        displayMovies(filteredMovies);

        document.getElementById("loading").innerText = "";

    }

    catch(error){

        document.getElementById("loading").innerText =
            "Failed to load movies";

        console.log(error);
    }
}


// Display Genres

function loadGenres(){

    const genreFilter =
        document.getElementById("genreFilter");

    let genres = [];

    allMovies.forEach(movie => {

        movie.genres.forEach(genre => {

            if(!genres.includes(genre)){
                genres.push(genre);
            }

        });

    });



    genres.sort();

    genres.forEach(genre => {

        genreFilter.innerHTML += `
            <option value="${genre}">
                ${genre}
            </option>
        `;

    });
}


// Display Movies

function displayMovies(movies){

    const container =
        document.getElementById("movieContainer");

    container.innerHTML = "";


    // Pagination Logic

    const startIndex =
        (currentPage - 1) * moviesPerPage;

    const endIndex =
        startIndex + moviesPerPage;

    const paginatedMovies =
        movies.slice(startIndex, endIndex);

    paginatedMovies.forEach(movie => {

        container.innerHTML += `

        <div class="movie-card">

            <img
                src="${
                    movie.image
                    ? movie.image.medium
                    : "https://via.placeholder.com/210x295"
                }"
            />

            <h3>${movie.name}</h3>

            <p>
                Rating :
                ${movie.rating.average || "N/A"}
            </p>

            <p>
                Genres :
                ${movie.genres.join(", ")}
            </p>

        </div>

        `;

    });
}


// Search Movies

function searchMovies(){

    const searchText =
        document.getElementById("searchInput")
        .value.toLowerCase();


    const selectedGenre =
        document.getElementById("genreFilter")
        .value;

    filteredMovies =
        allMovies.filter(movie => {

        const matchesSearch =
            movie.name
            .toLowerCase()
            .includes(searchText);


        const matchesGenre =
            selectedGenre === "all" ||

            movie.genres.includes(selectedGenre);

        return matchesSearch && matchesGenre;

    });

    ////////////////////////////////////////

    currentPage = 1;

    document.getElementById("pageNumber").innerText =
        currentPage;

    ////////////////////////////////////////

    displayMovies(filteredMovies);
}


// Debouncing

document
.getElementById("searchInput")
.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        searchMovies();

    }, 500);

});


// Genre Filter

document
.getElementById("genreFilter")
.addEventListener("change", () => {

    searchMovies();

});


// Next Button

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    const totalPages =
        Math.ceil(
            filteredMovies.length / moviesPerPage
        );

    if(currentPage < totalPages){

        currentPage++;

        document.getElementById("pageNumber").innerText =
            currentPage;

        displayMovies(filteredMovies);
    }

});


// Previous Button

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    if(currentPage > 1){

        currentPage--;

        document.getElementById("pageNumber").innerText =
            currentPage;

        displayMovies(filteredMovies);
    }

});

////////////////////////////////////////////////////

// Initial Function Call

getMovies();