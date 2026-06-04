const API_KEY = "AIzaSyBUnHI6N80k1_3rAZYLLnIym_H-b8raW8Y";
let allVideos = [];

let timer;


// FETCH VIDEOS
async function getVideos(search = "javascript tutorials") {

    const response = await fetch(

        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&videoEmbeddable=true&maxResults=16&key=${API_KEY}`

    );

    const data = await response.json();

    allVideos = data.items;

    displayVideos(allVideos);
}



// DISPLAY VIDEOS
function displayVideos(videos) {

    const container =
        document.getElementById("container");

    container.innerHTML = "";

    videos.forEach((video) => {

        container.innerHTML += `

            <div
                class="card"

                onclick="playVideo(
                    '${video.id.videoId}',
                    '${video.snippet.title}'
                )"
            >

                <img
                    src="${video.snippet.thumbnails.medium.url}"
                >

                <h3>
                    ${video.snippet.title}
                </h3>

            </div>

        `;

    });

}



// PLAY VIDEO
function playVideo(videoId, title) {

    const videoSection =
        document.getElementById("videoSection");

    videoSection.innerHTML = `

        <iframe
            width="100%"
            height="500"

            src="https://www.youtube.com/embed/${videoId}"

            frameborder="0"

            allowfullscreen>
        </iframe>

        <h2>${title}</h2>

    `;

}



// SEARCH VIDEOS
function searchVideos() {

    const searchText =
        document.getElementById("searchInput")
        .value;

    getVideos(searchText);

}



// DEBOUNCE SEARCH
function debounceSearch() {

    clearTimeout(timer);

    timer = setTimeout(() => {

        searchVideos();

    }, 500);

}



// INITIAL LOAD
getVideos();