import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import Movies from './movies/movies';
import getMovies from '../services/movieService';

class MoviesLayout extends Component {
    state = {
        movies: [],
        selectedMovie: null,
        searchQuery: ""
    };

    async componentDidMount() {
        const movies = await getMovies();
        this.setState({ movies });
    }

    handleMovieSelect = (movie) => {
        this.setState({ selectedMovie: movie });
    }

    handleSearch = (text) => {
        this.setState({ searchQuery: text });
    }

    render() {
        const { movies, selectedMovie, searchQuery } = this.state;
        return (
            <main className="container">
                <ToolBar
                    value={searchQuery}
                    onSearhChange={this.handleSearch}
                />
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