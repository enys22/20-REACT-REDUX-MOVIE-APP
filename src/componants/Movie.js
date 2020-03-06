import React from 'react'
import './Movie.css'
import RatingStars from './RatingStars'
import {editMovie,deleteMovie} from '../js/actions'
import {connect} from 'react-redux'

function Movie({movie,deleteMovie,openModalWithMovie}) {
    return (
        <div className="movieCard">
            {movie.rating ?
            <div className="movieSatrs">
                <RatingStars rating={movie.rating}/>
            </div>
            :null
            }
            <img src={movie.img}/>
            <hr/>
            <div className="movieDescription">
                <p>Title : <a href={`https://www.google.com/search?q=movie+${movie.title}`} target="_blank">{movie.title}</a></p>
                {movie.synopsis ? <p>Synopsis : {movie.synopsis}</p> :null}
            </div>
            <div>
                <button onClick={()=>openModalWithMovie(movie)} >Edit</button>
                <button onClick={()=>deleteMovie(movie.id)} style={{marginLeft : '5px'}} >Delete</button>
            </div>
            
        </div>
    )
}
export default connect(null,{editMovie,deleteMovie})(Movie);