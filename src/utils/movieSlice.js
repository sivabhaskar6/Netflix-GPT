import { createSlice } from "@reduxjs/toolkit";





const movieSlice = createSlice({
    name: "movies",
    initialState: {
        playingMovies: null,
        popularMovies:null,
        trailerVideo: null,
        trendingMovies:null,
        feelGoodMovies:null,


    },
    reducers: {
        setPlayingMovies: (state, action) => {
            state.playingMovies = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        setTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        setFeedGoodMovies: (state, action) => {
            state.feelGoodMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },

})

export const { setPlayingMovies,setPopularMovies,setTrendingMovies,setFeedGoodMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;