import React, { Component } from 'react'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'

    

function MovieDescription(props) {
        
    let { movieId } = useParams();
    
    console.log(movieId);
    let [movie] = props.movies.filter((el)=>el.id==movieId)
    console.log(movie)

    return (
        <div>
            <h2>{movie.title} trailer</h2>
            <iframe 
            width="560" 
            height="315" 
            src={movie.trailer} 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    )
}

const mapStateToProps =(state)=>({
    movies : state.movieReducer.movies
})
export default  connect(mapStateToProps)(MovieDescription)