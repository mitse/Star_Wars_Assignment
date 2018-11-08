import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import Movies from './movies/movies';
import getMovies from '../services/movieService';

class MoviesLayout extends Component {
    state = {
        movies: [],
        selectedMovie: null,
    };

    async componentDidMount() {
        const movies = await getMovies();
        this.setState({ movies });
    }

    handleMovieSelect = (movie) => {
        this.setState({ selectedMovie: movie });
      }

    render() {
        const {movies, selectedMovie} = this.state;
        return (
            <main className="container">
                <ToolBar />
                <Movies
                    movies={movies}
                    selectedMovie={selectedMovie}
                    onMovieSelect={this.handleMovieSelect}
                />
            </main>
        );
    }
}

export default MoviesLayout;