import React from 'react'
import './Movie.css'
import RatingStars from './RatingStars'
import {editMovie,deleteMovie} from '../js/actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Movie({movie,deleteMovie,openModal}) {
    return (
        <div className='movieCard' key={movie.id}>
                {movie.rating ?
                <div className="movieSatrs">
                    <RatingStars rating={movie.rating}/>
                </div>
                :null
                }
                <img src={movie.img} alt={movie.title}/>
                <hr/>
                <div className="movieDescription">
                    <p>Title : <a href={`https://www.google.com/search?q=movie+${movie.title}`} target="_blank" rel="noopener noreferrer">{movie.title}</a></p>
                    {movie.synopsis ? <p>Synopsis : {movie.synopsis}</p> :null}
                </div>
                <div>
                    <button onClick={()=>openModal(movie)} >Edit</button>
                    <button onClick={()=>deleteMovie(movie.id)} style={{marginLeft : '5px'}} >Delete</button>
                    <Link to={`/description/${movie.id}`}> <button>Trailer</button> </Link>
                </div>
        </div>
    )
}
export default connect(null,{editMovie,deleteMovie})(Movie);