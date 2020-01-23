const baseURL = "http://localhost:8088";

//gets movies from database
const getMovies = () => {
    return fetch(`${baseURL}/movies`)
        .then(res => res.json());
}