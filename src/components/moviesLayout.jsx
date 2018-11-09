import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import Movies from './movies/movies';
import getMovies from '../services/movieService';

class MoviesLayout extends Component {
    state = {
        movies: [],
        selectedMovie: null,
        searchQuery: "",
        sortType: ""
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

    handleSort = (type) => {
        console.log(type, this.sortType);
        this.setState({ sortType: type });
    }

    getMoviesForList = () => {
        const { movies, searchQuery, sortType } = this.state;
        //Filtering
        const filteredMovies = searchQuery ?
             movies.filter(movie =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
             : movies;

        //Ascending order Sorting  
        const sorted = filteredMovies.sort((a, b) => a[sortType] - b[sortType]).slice();

        return sorted ? filteredMovies: sorted;
    }

    render() {
        const { selectedMovie, searchQuery } = this.state;
        const movies = this.getMoviesForList();
        return (
            <main className="container">
                <ToolBar
                    value={searchQuery}
                    onSearhChange={this.handleSearch}
                    onSortTypeSelect={this.handleSort}
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