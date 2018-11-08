import React, { Component } from 'react';
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
            </main>
        );
    }
}

export default MoviesLayout;