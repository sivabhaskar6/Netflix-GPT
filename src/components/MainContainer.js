import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";



const MainContainer = () =>{

    const movies = useSelector((store) => store.movie?.playingMovies);
    const mainMovie = movies?.[Math.floor(Math.random() * movies.length)];

    if (!mainMovie) return <div>Loading...</div>;
    const { title, overview, backdrop_path ,id } = mainMovie;


    return(
        <div className="main-container">
            <div className="relative">
                <VideoBackground backdrop_path={backdrop_path} id={id} />
                <VideoTitle title={title} overview={overview} />
            </div>
        </div>
    )
}
export default MainContainer;