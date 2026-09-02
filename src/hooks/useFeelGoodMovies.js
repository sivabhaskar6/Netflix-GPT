import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setFeedGoodMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";



const useFeelGoodMovies = () => {

    const {feelGoodMovies} = useSelector((state) => state.movie);
    
    //fetch now playing movies from the TMDB API and store them in the Redux store

    const dispatch = useDispatch();

    useEffect(() => {
        if(!feelGoodMovies)
         getPlayingMovies();

    },[])

    const getPlayingMovies = async () => {
        try {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2", API_OPTIONS);
        const data = await response.json();
        console.log("fg", data.results);
        dispatch(setFeedGoodMovies(data.results));
        } 
        catch (error) {

        console.error("Error fetching playing movies:", error);
        }
    }
}

export default useFeelGoodMovies;