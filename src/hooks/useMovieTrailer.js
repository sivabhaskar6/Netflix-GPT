import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";



const useMovieTrailer = (id)=>{
    const dispatch = useDispatch();
    const getVideoUrl = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?&page=1`,API_OPTIONS)
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                // Do something with the video URL
                const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");

                dispatch(addTrailerVideo(trailer?.key));
            }
        }
        catch (error) {
            console.error("Error fetching video URL:", error);
        }
    }

    useEffect(() => {
        getVideoUrl();
    }, []);
}

export default useMovieTrailer;