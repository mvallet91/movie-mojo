import React, {Component} from "react";

class Movie extends Component {
    render() {
        return (
            <div className='movie'>
                <h2>{this.props.title}</h2>
                <div><img width='200px' src={this.props.poster} /></div>
                <p>({this.props.year})</p>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default Movie;