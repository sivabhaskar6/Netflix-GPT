import { createSlice } from "@reduxjs/toolkit";





const movieSlice = createSlice({
    name: "movies",
    initialState: {
        playingMovies: null,
    },
    reducers: {
        setPlayingMovies: (state, action) => {
            state.playingMovies = action.payload;
        }
    },

})

export const { setPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;