import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";



const useTrendingMovies = () => {

    const {trendingMovies} = useSelector((state) => state.movie);
    
    //fetch now playing movies from the TMDB API and store them in the Redux store

    const dispatch = useDispatch();

    useEffect(() => {
        if(!trendingMovies)
         getPlayingMovies();

    },[])

    const getPlayingMovies = async () => {
        try {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3", API_OPTIONS);
        const data = await response.json();
        dispatch(setTrendingMovies(data.results));
        } 
        catch (error) {

        console.error("Error fetching playing movies:", error);
        }
    }
}

export default useTrendingMovies;