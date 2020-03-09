import React from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'

    

function MovieDescription(props) {
        
    let { movieId } = useParams();
    
    console.log(movieId);
    let [movie] = props.movies.filter((el)=>el.id==movieId)
    console.log(movie)

    const MovieTrailer = (props)=>{
       return <iframe 
            width="560" 
            height="315" 
            src={props.trailer} 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    }

    return (
        <div>
            {!movie ?  <h1> Ooouups! Sorry something is going wrong </h1>  : <> <h2>{movie.title} trailer</h2> <MovieTrailer trailer={movie.trailer} /> </> }
        </div>
    )
}

const mapStateToProps =(state)=>({
    movies : state.movieReducer.movies
})
export default  connect(mapStateToProps)(MovieDescription)