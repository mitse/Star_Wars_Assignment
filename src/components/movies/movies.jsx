import React from 'react';
import MoviesList from './moviesList';
import MovieDetails from './movieDetails';

const Movies = (props) => {
  
    return (
        <div className="movies-container">
            <MoviesList/>
            <div className="horizontal-line"></div>
            <MovieDetails/>
        </div>
    );
}

export default Movies;