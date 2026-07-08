import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useState } from "react";



const VideoBackground = ({ backdrop_path, id }) => {
    const [videoUrl, setVideoUrl] = useState(null);
    const getVideoUrl = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?&page=1`,API_OPTIONS)
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                // Do something with the video URL
                const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");

                setVideoUrl(trailer?.key);
            }
        }
        catch (error) {
            console.error("Error fetching video URL:", error);
        }
    }

    useEffect(() => {
        getVideoUrl();
    }, []);

    if (!videoUrl) {
        return (
            <img
                className="w-full h-screen object-cover"
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt="Background"
            />
        );
    }

    return (
        <div className="w-full h-screen">
            <iframe
                className="w-full h-screen"
                title="Video Background"
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${videoUrl}`}
            ></iframe>
        </div>
    );
};

export default VideoBackground;