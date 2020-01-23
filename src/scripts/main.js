const baseURL = "http://localhost:8088";

//gets movies from database
const getMovies = () => {
    return fetch(`${baseURL}/movies`)
        .then(res => res.json());
}

//creates HTML representation of movie
const movieFactory = (movieObj) => {
    return `
        <section class="movie">
            <div>Title: ${movieObj.title}</div>
            <div>Date: ${movieObj.yearReleased}</div>
        </section>
    `
}

//iterates through the array and updates the DOM with the HTML representation of each movie
const renderMovies = (moviesArray) => {
    const movieContainer = document.getElementById("movie-container");
    moviesArray.forEach(movie => movieContainer.innerHTML += movieFactory(movie))
}

//invoking the getMovies function and then rendering the movies to the DOM
getMovies()
    .then(movieList => renderMovies(movieList));