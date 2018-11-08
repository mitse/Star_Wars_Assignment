import React from 'react';

const MoviesList = (props) => {
    const { movies, onMovieSelect } = props;

    return (
        <table className="movies-list">
            <tbody>
                {movies.map(movie =>
                    <tr key={movie.id} onClick={() => onMovieSelect(movie)} >
                        <td>EPISODE {movie.episodeNumber}</td>
                        <td>{movie.title}</td>
                        <td>{movie.releaseDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default MoviesList;