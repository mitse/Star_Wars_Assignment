import http from './httpService';

const endPoint = 'https://star-wars-api.herokuapp.com/films'

const extractMovies = (movie) => {
    const { episode_id, director, title, producer, release_date, opening_crawl } = movie['fields'];
    return {
        id: movie.id,
        episodeNumber: episode_id,
        plot: opening_crawl,
        director,
        title,
        producer,
        releaseDate: release_date,
        year: new Date(release_date).getFullYear()
    };
}

const getMovies = async () => {
    const { data: allMovies } = await http.get(endPoint);
    const movies = allMovies.map(movie => extractMovies(movie));
    return movies;
}

export default getMovies;