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

    getFilteredMovies = () => {
        const { movies, searchQuery } = this.state;
        let filteredMovies;

        if (searchQuery) {
            filteredMovies = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else
            filteredMovies = movies;

        return filteredMovies;
    }

    render() {
        const { selectedMovie, searchQuery } = this.state;
        const movies = this.getFilteredMovies();
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