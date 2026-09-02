import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({ posterPath ,title,key }) =>{
    if(!posterPath)
        return
    return(
        <div className="movie-card w-52 pr-4 text-white">
            <img className=" text-white" src={IMG_CDN_URL + posterPath} alt={title} />
        </div>
    )
}

export default MovieCard;