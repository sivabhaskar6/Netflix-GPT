import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () => {
    //fetch now playing movies from the TMDB API and store them in the Redux store

    const dispatch = useDispatch();

    useEffect(() => {
        getPlayingMovies();

    },[])

    const getPlayingMovies = async () => {
        try {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1", API_OPTIONS);
        const data = await response.json();
        // console.log(data.results);
        dispatch(setPlayingMovies(data.results));
        } 
        catch (error) {

        console.error("Error fetching playing movies:", error);
        }
    }
}

export default useNowPlayingMovies;