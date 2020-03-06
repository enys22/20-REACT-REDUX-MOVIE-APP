import React, { Component } from 'react'
import Movie from './Movie'
import './MovieList.css'
import AddMovie from './AddMovie'
import {connect} from 'react-redux'
import {editMovie} from '../js/actions'

// function MovieList({result,movies,ratingSearch,inputSearch,editMovie}) {

//     const 
//     return (
        
//     )
// }
class MovieList extends Component {
    state={
        movieToEdit : null
    }
    openModalWithMovie=(movie)=>{
        this.setState({movieToEdit : movie})
    }
    editMovieId = (id) =>{
        this.props.editMovie(id)
    }
    render() {
        return (
            <div className='moviesList'>
                {((this.props.ratingSearch || this.props.inputSearch.length!==0) ? this.props.result : this.props.movies ).map((movieItem,i) => <Movie movie={movieItem} openModalWithMovie={this.openModalWithMovie}/>)}
                <div className="movieCard">
                    <AddMovie movieToEdit={this.state.movieToEdit} editMovie={this.editMovieId}  />
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    result : state.movieReducer.result,
    movies : state.movieReducer.movies,
    ratingSearch : state.movieReducer.ratingSearch,
    inputSearch : state.movieReducer.inputSearch 
    })
export default connect(mapStateToProps,{editMovie})(MovieList);


