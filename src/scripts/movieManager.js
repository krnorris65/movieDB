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
    moviesArray.forEach(movie => { 
        const movieHTML = movieFactory(movie);
        movieContainer.innerHTML += movieHTML;
    })
}