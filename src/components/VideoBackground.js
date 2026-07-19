import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";




const VideoBackground = ({ backdrop_path, id }) => {
    const videoUrlId = useSelector((state) => state.movie.trailerVideo);
    
    useMovieTrailer(id);

    if (!videoUrlId) {
        return (
            <img
                className="w-full h-screen object-cover"
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt="Background"
            />
        );
    }

    return (
     <div className=" inset-0 w-screen h-screen">
        <iframe
            className="absolute inset-0 w-full h-full scale-[1.8] origin-center"
            title="Video Background"
            src={`https://www.youtube.com/embed/${videoUrlId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoUrlId}`}
            allow="autoplay; fullscreen"
        />
    </div>
    );
};

export default VideoBackground;