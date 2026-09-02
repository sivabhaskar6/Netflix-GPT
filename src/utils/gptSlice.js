import { createSlice } from "@reduxjs/toolkit";



const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showGptSearch:false,
        gptRecommendedMovies: null,
        gptTmdbmovies:null
    },
    reducers:{
        toggleGptSearchView:(state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        setGptRecommendedMovies:(state,action) =>{
            const{tmdbMovies,gptMoviesNames}= action.payload;
            state.gptRecommendedMovies = gptMoviesNames;
            state.gptTmdbmovies = tmdbMovies;
        }
    }

})

export const {toggleGptSearchView,setGptRecommendedMovies} = gptSlice.actions;

export default gptSlice.reducer;