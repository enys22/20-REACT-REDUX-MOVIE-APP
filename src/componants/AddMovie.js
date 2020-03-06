import React, { Component } from 'react'
import Modal from 'react-modal';
import './AddMovie.css'
import RatingStars from './RatingStars'
import {connect} from 'react-redux'
import {addMovie,editMovie} from '../js/actions'
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
}

class AddMovie extends Component{
    constructor (props){
        super(props)
        this.state = {
            modalIsOpen : false,
            newMovie : {
                title: "",
                synopsis: "",
                img: "",
                trailer: "",
                rating: 0
              }
        }
    }
    componentDidMount(){
      if(this.props.movieToEdit){
        this.setState({ ...this.state , newMovie : this.props.movieToEdit})
      }
    }


   openModal=()=> {
    this.setState({modalIsOpen : true})
  }
 
   closeModal=()=> {
       this.setState({modalIsOpen : false})
  }

  changeMovieTitle=(e)=>{
    this.setState({newMovie: {...this.state.newMovie, title : e.target.value}})
  }
  changeMovieSynopsis=(e)=>{
      this.setState({newMovie: {...this.state.newMovie, synopsis : e.target.value}})
  }
  changeMovieImg=(e)=>{
      this.setState({newMovie: {...this.state.newMovie, img : e.target.value}})
  }
  changeMovieTrailer=(e)=>{
      this.setState({newMovie: {...this.state.newMovie, trailer : e.target.value}})
  }
  changeMovieRating = (value)=>{
      this.setState({newMovie: {...this.state.newMovie, rating : value}})
  }
  saveNewMovie=()=>{
    if (this.state.newMovie.title && this.state.newMovie.trailer){
      {this.state.newMovie.id ? this.props.editMovie(this.state.newMovie): this.props.addMovie(this.state.newMovie)} 
      this.setState({newMovie: {
        title: "",
        synopsis: "",
        img: "",
        trailer: "",
        rating: 0
      }})
      this.closeModal()
    }
    else alert('Movie should have at least a "Title" and a "Trailer" ' )
    }

  render(){
    return (
      <div className="addMovie">
        <svg style={{margin : "60px"}} onClick={this.openModal} height="100px" viewBox="0 0 448 448" width="100px" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2>Add a new movie</h2>
            <label>Title :</label>
            <input type="text" className="title" value={this.state.newMovie.title} onChange={this.changeMovieTitle}/><br/>
            <label>Poster link :</label>
            <input type="text" name="poster" value={this.state.newMovie.img} onChange={this.changeMovieImg}/><br/>
            <label>Synopsis :</label>
            <input type="text" name="synopsis" value={this.state.newMovie.synopsis} onChange={this.changeMovieSynopsis}/><br/>
            <label>Trailer link :</label>
            <input type="text" name="trailer" value={this.state.newMovie.trailer} onChange={this.changeMovieTrailer}/><br/>
            <div className="newMovieRating">
                <label>Rating : </label>
                <div><RatingStars rating={0} getRating={this.changeMovieRating}/></div>
            </div>
            <input className="submit" type="submit" value="Save" onClick={this.saveNewMovie}/>
          <button className="close" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    )
  }
}
 
export default connect(null,{addMovie,editMovie})(AddMovie);