import { fetchMovies } from "./api.js";

const movieContainer =
document.getElementById("movieContainer");

const searchInput =
document.getElementById("searchInput");

const genreFilter =
document.getElementById("genreFilter");

const loading =
document.getElementById("loading");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const pageNumber =
document.getElementById("pageNumber");

let movies = [];
let filteredMovies = [];

let currentPage = 1;
const moviesPerPage = 8;

let debounceTimer;


// INITIAL LOAD

init();

async function init(){

    loading.style.display = "block";

    movies = await fetchMovies();

    filteredMovies = [...movies];

    createGenreOptions();

    renderMovies();

    loading.style.display = "none";
}


// CREATE GENRE DROPDOWN

function createGenreOptions(){

    const genres = new Set();

    movies.forEach(movie => {

        movie.genres.forEach(genre => {
            genres.add(genre);
        });

    });

    genres.forEach(genre => {

        const option =
        document.createElement("option");

        option.value = genre;
        option.textContent = genre;

        genreFilter.appendChild(option);

    });

}


// DISPLAY MOVIES

function renderMovies(){

    movieContainer.innerHTML = "";

    const start =
    (currentPage - 1) * moviesPerPage;

    const end =
    start + moviesPerPage;

    const currentMovies =
    filteredMovies.slice(start, end);

    currentMovies.forEach(movie => {

        const card =
        document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `

            <img
            src="${
                movie.image?.medium ||
                'https://via.placeholder.com/300'
            }"
            alt="${movie.name}">

            <div class="movie-content">

                <h3>${movie.name}</h3>

                <p>
                    Rating:
                    ${movie.rating.average || "N/A"}
                </p>

                <p>
                    Genres:
                    ${movie.genres.join(", ")}
                </p>

                <div class="btn-group">

                    <button
                    class="btn details-btn"
                    data-id="${movie.id}">
                    Details
                    </button>

                    <button
                    class="btn watch-btn"
                    data-id="${movie.id}">
                    Add
                    </button>

                </div>

            </div>

        `;

        movieContainer.appendChild(card);

    });

    pageNumber.textContent = currentPage;
}


// SEARCH WITH DEBOUNCING

searchInput.addEventListener("input", () => {

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {

        const searchValue =
        searchInput.value.toLowerCase();

        filteredMovies =
        movies.filter(movie =>

            movie.name
            .toLowerCase()
            .includes(searchValue)

        );

        currentPage = 1;

        renderMovies();

    }, 500);

});


// GENRE FILTER

genreFilter.addEventListener("change", () => {

    const selectedGenre =
    genreFilter.value;

    if(selectedGenre === "all"){

        filteredMovies = [...movies];

    }else{

        filteredMovies =
        movies.filter(movie =>

            movie.genres.includes(
                selectedGenre
            )

        );

    }

    currentPage = 1;

    renderMovies();

});


// PAGINATION

nextBtn.addEventListener("click", () => {

    const totalPages =
    Math.ceil(
        filteredMovies.length /
        moviesPerPage
    );

    if(currentPage < totalPages){

        currentPage++;

        renderMovies();

    }

});

prevBtn.addEventListener("click", () => {

    if(currentPage > 1){

        currentPage--;

        renderMovies();

    }

});


// DETAILS + WATCHLIST

movieContainer.addEventListener("click", e => {

    const movieId =
    Number(e.target.dataset.id);

    if(
        e.target.classList.contains(
            "details-btn"
        )
    ){

        const selectedMovie =
        movies.find(movie =>
            movie.id === movieId
        );

        localStorage.setItem(
            "selectedMovie",
            JSON.stringify(selectedMovie)
        );

        window.location.href =
        "movie.html";

    }

    if(
        e.target.classList.contains(
            "watch-btn"
        )
    ){

        const movie =
        movies.find(movie =>
            movie.id === movieId
        );

        let watchlist =
        JSON.parse(
            localStorage.getItem(
                "watchlist"
            )
        ) || [];

        const alreadyExists =
        watchlist.some(item =>
            item.id === movie.id
        );

        if(!alreadyExists){

            watchlist.push(movie);

            localStorage.setItem(
                "watchlist",
                JSON.stringify(watchlist)
            );

            alert(
                "Movie added to Watchlist"
            );

        }else{

            alert(
                "Movie already exists"
            );

        }

    }

});