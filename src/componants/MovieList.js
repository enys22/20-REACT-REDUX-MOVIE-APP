import React, { Component } from 'react'
import Movie from './Movie'
import './MovieList.css'
import AddMovie from './AddMovie'
import {connect} from 'react-redux'
import {editMovie} from '../js/actions'

class MovieList extends Component {
    state={
        modalIsOpen : false,
        newMovie : {
            title: "",
            synopsis: "",
            img: "",
            trailer: "",
            rating: 0
          }

    }
    openModal=(movie = this.state.newMovie)=>{
        this.setState({newMovie : movie, modalIsOpen : true})
    }
   closeModal=()=> {
        this.setState({modalIsOpen : false,newMovie : {title: "",
        synopsis: "",
        img: "",
        trailer: "",
        rating: 0}
    })
    }
    // editMovieId = (id) =>{
    //     this.props.editMovie(id)
    // }
    render() {
        return (
            <>
            <div className='moviesList'>
                {((this.props.ratingSearch || this.props.inputSearch.length!==0) ? this.props.result : this.props.movies ).map((movieItem,i) => <Movie movie={movieItem} openModal={this.openModal}/>)}
                
            </div>
            <div className="movieCard">
                <AddMovie newMovie={this.state.newMovie} /*editMovie={this.props.editMovie}*/ modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} openModal={this.openModal} />
            </div>
            </>
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


