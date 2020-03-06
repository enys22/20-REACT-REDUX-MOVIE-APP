import './App.css';
import React, { Component } from 'react'
import MovieList from './componants/MovieList'
import RatingStars from './componants/RatingStars'
import {connect} from 'react-redux' 
import {inputSearch,ratingSearch} from './js/actions'

class App extends Component {
  // state = {
  //   movies: [
  //     {
  //       title: "abcd",
  //       synopsis: "lorem epsum",
  //       actors: ["actor 1", "actor 2"],
  //       rating: 5
  //     },
  //     {
  //       title: "efg",
  //       synopsis: "lorem epsum",
  //       actors: ["actor 1", "actor 2"],
  //       rating: 4
  //     }
  //   ],
  //   search: {
  //     text: '',
  //     rating: 0
  //   },
  //   result: []
  // }

  handleSearchChange = (e) => {
    //this.setState({ search: { ...this.state.search, text: e.target.value } })
    this.props.inputSearch(e.target.value)
  }
  // searchMovie = () => {
  //     return this.state.movies.filter(el => ( (el.title.indexOf(this.state.search.text) !== -1 || el.synopsis.indexOf(this.state.search.text) !== -1 || el.actors.indexOf(this.state.search.text) !== -1) && (el.rating >= this.state.search.rating) ) )
  //   }
  searchRating = (rat) => {
    //this.setState({ search: { ...this.state.search, rating: rat } }  );
    this.props.ratingSearch(rat)
    //this.searchMovie() ;
  }
  
  addMovie = (newMovie) =>{
    this.setState({ movies: [...this.state.movies,newMovie] })
  }


  render() {
    return (
      <div className="App">
        <div className='header'>

          <div className='searchBar'>
            <input className='inputText' type="text" onChange={this.handleSearchChange} />
            {/* <button className='inputBtn' type="submit" value="Search" onClick={this.searchMovie} >Search</button> */}
          </div>

          <div className='rating'> 
            <p>Minimum rating</p>
            <RatingStars rating={0} getRating={this.searchRating}/>
          </div>
        </div>

        <h3>{this.props.result.length || this.props.ratingForSearch ?  ` Result for movies ${this.props.inputForSearch} with minimum ${this.props.ratingForSearch} stars rating ` : "Newest movie"}</h3>
        <MovieList  /*movieList={this.props.result}*/ saveMovie={this.addMovie}  />
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
//export default App;