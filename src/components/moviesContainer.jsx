import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import Movies from './movies/movies';
import getMovies from '../services/movieService';

class MoviesContainer extends Component {
    state = {
        movies: [],
        selectedMovie: null,
        searchQuery: "",
        sortType: "",
        filteredMovies: []
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sortType !== this.state.sortType || !this.state.sortType 
               || nextState.searchQuery !== this.state.searchQuery
               || nextState.selectedMovie !== this.state.selectedMovie;
    }


    async componentDidMount() {
        const movies = await getMovies();
        this.setState({ movies, filteredMovies: movies });
    }

    handleMovieSelect = (movie) => {
        this.setState({ selectedMovie: movie });
    }

    handleSearch = (text) => {
        const fMovies = this.filterMovies(text);
        this.setState({searchQuery: text, filteredMovies: fMovies });
    }

    handleSort = (type) => {
        const sMovies = this.sortMovies(type);
        this.setState({sortType: type, filteredMovies: sMovies });
    }

    filterMovies(searchQuery) {
        const { movies } = this.state;

        const filteredMovies = searchQuery ?
        movies.filter(movie =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
             : movies;
        return filteredMovies;     
    }

    sortMovies(type) {
        const {filteredMovies} = this.state;
        return filteredMovies.sort((a, b) => a[type] - b[type]);
    }


    render() {
        const { selectedMovie, searchQuery, filteredMovies } = this.state;
        const movies = filteredMovies;

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

export default MoviesContainer;