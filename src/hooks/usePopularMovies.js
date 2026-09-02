import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";



const usePopularMovies = () => {

    const {popularMovies} = useSelector((state) => state.movie);
    
    //fetch now playing movies from the TMDB API and store them in the Redux store

    const dispatch = useDispatch();

    useEffect(() => {
        if(!popularMovies)
         getPlayingMovies();

    },[])

    const getPlayingMovies = async () => {
        try {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(setPopularMovies(data.results));
        } 
        catch (error) {

        console.error("Error fetching playing movies:", error);
        }
    }
}

export default usePopularMovies;