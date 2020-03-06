import {INPUT_SEARCH,DELETE_MOVIE,ADD_MOVIE,RATING_SEARCH,EDIT_MOVIE } from '../contantes/actions-types'

const initialState = {
    movies: [
        {
            id : 256,
            title: "Parasite",
            synopsis: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.",
            img: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
            trailer: "https://www.youtube.com/embed/isOGD_7hNIY",
            rating: 5
        },
        {
            id : 754,
            title: "Uncut Gems",
            synopsis: "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.",
            img: "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
            trailer: "https://www.youtube.com/embed/vTfJp2Ts9X8",
            rating: 4
        },
        {
            id : 943,
            title: "Midsommar",
            synopsis: "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
            img: "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_UY209_CR0,0,140,209_AL_.jpg",
            trailer: "https://www.youtube.com/embed/1Vnghdsjmd0",
            rating: 3
        }
      ],
      ratingSearch:0,
      inputSearch:"",
      result: []
}

const movieReducer = (state = initialState,{type,payload})=>{
    switch (type){
        case INPUT_SEARCH:
            return {
                ...state,
                inputSearch : payload,
                result : state.movies.filter(el => ( (el.title.toLowerCase().indexOf(payload.toLowerCase) !== -1 || el.synopsis.toLowerCase().indexOf(payload.toLowerCase()) !== -1) && (el.rating >= state.ratingSearch || !state.ratingSearch ) ) )
            }
        case DELETE_MOVIE:
            return {
                ...state,
                movies : state.movies.filter((el)=>(el.id!==payload))
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies,{...payload , id : Date.now()}]
            }
        case RATING_SEARCH:
            return {
                ...state,
                ratingSearch : payload,
                result : state.movies.filter(el => ( (el.title.toLowerCase().indexOf(state.inputSearch.toLowerCase()) !== -1 || el.synopsis.toLowerCase().indexOf(state.inputSearch.toLowerCase()) !== -1) && (el.rating >= payload ) ) )
            }
        // case EDIT_MOVIE:
        //     return {
        //         ...state,
        //         movies : state.movies.map(el=>el.id===payload.id ? payload : el)
        //     }
        default : return state
    }

}

export default movieReducer