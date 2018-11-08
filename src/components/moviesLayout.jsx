import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import Movies from './movies/movies';
import getMovies from '../services/movieService';

class MoviesLayout extends Component {
    state = {
        movies: []
    };

    async componentDidMount() {
        const movies = await getMovies();
        this.setState({ movies });
        console.log(movies);
    }

    render() {
        return (
            <main className="container">
                <ToolBar/>
                <Movies/>
            </main>
        );
    }
}

export default MoviesLayout;