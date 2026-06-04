const API_URL =
"https://api.tvmaze.com/search/shows?q=all";

export async function fetchMovies(){

    try{

        const response =
        await fetch(API_URL);

        if(!response.ok){
            throw new Error(
                "Failed to fetch movies"
            );
        }

        const data =
        await response.json();

        return data.map(
            item => item.show
        );
    }
    catch(error){

        console.log(error);

        return [];
    }
}