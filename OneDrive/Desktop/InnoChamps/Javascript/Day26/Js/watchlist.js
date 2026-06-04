const watchlistContainer =
document.getElementById(
    "watchlistContainer"
);

let watchlist =
JSON.parse(
    localStorage.getItem("watchlist")
) || [];

renderWatchlist();

function renderWatchlist(){

    if(watchlist.length === 0){

        watchlistContainer.innerHTML = `
            <div class="empty">
                No Movies In Watchlist
            </div>
        `;

        return;
    }

    watchlistContainer.innerHTML = "";

    watchlist.forEach(movie => {

        const card =
        document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `

            <img
            src="${
                movie.image?.medium ||
                "https://via.placeholder.com/300"
            }"
            alt="${movie.name}">

            <div class="movie-content">

                <h3>${movie.name}</h3>

                <p>
                    Rating:
                    ${
                        movie.rating.average ||
                        "N/A"
                    }
                </p>

                <p>
                    Genres:
                    ${movie.genres.join(", ")}
                </p>

                <div class="btn-group">

                    <button
                    class="btn remove-btn"
                    data-id="${movie.id}">
                    Remove
                    </button>

                    <button
                    class="btn details-btn"
                    data-id="${movie.id}">
                    Details
                    </button>

                </div>

            </div>

        `;

        watchlistContainer.appendChild(card);

    });

}

watchlistContainer.addEventListener("click", e => {

    const movieId =
    Number(
        e.target.dataset.id
    );

    // REMOVE MOVIE

    if(
        e.target.classList.contains(
            "remove-btn"
        )
    ){

        watchlist =
        watchlist.filter(movie =>
            movie.id !== movieId
        );

        localStorage.setItem(
            "watchlist",
            JSON.stringify(watchlist)
        );

        renderWatchlist();

    }

    // MOVIE DETAILS

    if(
        e.target.classList.contains(
            "details-btn"
        )
    ){

        const selectedMovie =
        watchlist.find(movie =>
            movie.id === movieId
        );

        localStorage.setItem(
            "selectedMovie",
            JSON.stringify(selectedMovie)
        );

        window.location.href =
        "movie.html";

    }

});