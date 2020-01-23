//invoking the getMovies function and then rendering the movies to the DOM
getMovies()
    .then(movieList => renderMovies(movieList));
 