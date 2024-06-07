import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';

class Movies extends Component {
    state = { 
        movies : getMovies(),
    } 

    handleDeleteEvent = (movie) => {
        // console.log('click');
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({movies});
    }
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState( {movies});
    }

    render() { 

        if(this.state.movies.length === 0) 
            return <p className='text-center mt-2 font-weight-bold text-danger'>There are no movies in the database</p>;

        return (
            <>
            <p className='text-center mt-2 font-weight-bold text-success'>Showing <span className='text-warning'>{this.state.movies.length}</span> movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                {this.state.movies.map( movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked} onClick={ () => this.handleLike(movie)}/></td>
                        <td><button onClick={() => this.handleDeleteEvent(movie)} className='btn btn-danger'>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </>
        );
    }
}
 
export default Movies;