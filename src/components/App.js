import React, {Component} from 'react';
import '../App.css';
import Header from "./Header";
import Movie from "./Movie";
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

let headerText = "Crash-Course movie App"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header text={headerText} />
                <p className='App-intro'>
                    Check out these movies
                </p>
                <div className='movies'>
                    <Movie title="50 First Dates" year="2004" desc="Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams." poster="./posters/50-first-dates.png" />
                    <Movie title="Ferris Bueller's Day Off" year="1986" desc="A high school wise guy is determined to have a day off from school, despite what the principal thinks of that." poster="./posters/ferris.png" />
                    <Movie title='Dirty Dancing' year='1987' desc='They dance' poster='./posters/dirty-dancing.png'/>
                    <Movie title="Matilda" year="1996" desc="Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable." poster="./posters/matilda.png" />
                </div>
            </div>
        );
    }
}

export default App;
