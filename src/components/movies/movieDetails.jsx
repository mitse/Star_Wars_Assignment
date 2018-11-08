import React from 'react';
import removeLineBreaks from '../../utils/removeLineBreaks';

const MovieDetails = (props) => {
    const { selectedMovie } = props;
    if (!selectedMovie)
        return <div className="movie-details">
            <div className="movie-not-selected">No movie selected</div>
        </div>;
    return (
        <div className="movie-details">
            <h1>{selectedMovie.title}</h1>
            <div className="movie-plot">{removeLineBreaks(selectedMovie.plot)}</div>
            <div className="movie-director">Directed by: {selectedMovie.director}</div>
        </div>
    );
}

export default MovieDetails;