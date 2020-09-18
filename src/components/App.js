import React, {Component} from 'react';
import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import AddMovie from "./AddMovie";

let headerText = "Crash-Course movie App"

class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: initialMovies
        };
        this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
        this.addMovieToGallery = this.addMovieToGallery.bind(this)
    }

    loadAdditionalMovies(){
        let currentMovies = {...this.state.movies};
        let newMovies = Object.assign(currentMovies, additionalMovies);
        this.setState({movies: newMovies})
    }

    addMovieToGallery(movie){
        let ts = Date.now();
        let newMovie = {};
        newMovie['movie_' + ts] = movie;
        let currentMovies = {...this.state.movies};
        let newMovies = Object.assign(currentMovies, newMovie);
        this.setState({movies: newMovies})
    }

    render() {
        return (
            <div className="App">
                <Header text={headerText} />
                <p className='App-intro'>
                    Check out these movies
                </p>
                <div className='movies'>
                    {
                        Object
                            .keys(this.state.movies)
                            .map(key => <Movie key={key} meta={this.state.movies[key]} />)
                    }
                </div>
                <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>
                <AddMovie addMovie={this.addMovieToGallery}/>
            </div>
        );
    }
}

export default App;
