import React from 'react';
import MoviesList from './moviesList';
import MovieDetails from './movieDetails';

const Movies = (props) => {
    const { movies,selectedMovie,onMovieSelect } = props;
    return (
        <div className="movies-container">
            <MoviesList 
              movies={movies} 
              onMovieSelect={onMovieSelect}
            />
            <div className="horizontal-line"></div>
            <MovieDetails selectedMovie={selectedMovie} />
        </div>
    );
}

export default Movies;