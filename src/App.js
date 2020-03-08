import './App.css';
import React, { Component } from 'react'
import MovieList from './componants/MovieList'
import RatingStars from './componants/RatingStars'
import {connect} from 'react-redux' 
import {inputSearch,ratingSearch} from './js/actions'
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import MovieDescription from './componants/MovieDescription'

class App extends Component {

  handleSearchChange = (e) => {
    this.props.inputSearch(e.target.value)
  }
  searchRating = (rat) => {
    this.props.ratingSearch(rat)
  }
  addMovie = (newMovie) =>{
    this.setState({ movies: [...this.state.movies,newMovie] })
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div className='header'>

            <div className='searchBar'>
              <input className='inputText' type="text" onChange={this.handleSearchChange} />
              <Link to='/'> <button className="searchBtn">Search</button> </Link>
            </div>

            <div className='rating'> 
              <p>Minimum rating</p>
              <RatingStars rating={0} getRating={this.searchRating}/>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <h3>{this.props.result.length || this.props.ratingForSearch ?  ` Result for movies ${this.props.inputForSearch} with minimum ${this.props.ratingForSearch} stars rating ` : "Newest movie"}</h3>
              <MovieList  /*movieList={this.props.result}*/ saveMovie={this.addMovie}  />
            </Route>
            <Route path='/description/:movieId'>
              <MovieDescription/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ratingForSearch: state.movieReducer.ratingSearch,
  inputForSearch: state.movieReducer.inputSearch,
  result: state.movieReducer.result
});
export default connect(mapStateToProps,{inputSearch,ratingSearch})(App);