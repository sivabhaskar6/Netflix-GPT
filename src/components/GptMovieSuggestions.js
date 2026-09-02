import { useSelector } from "react-redux";
import MovieList from "./MovieList";



const GptMovieSuggestions = () => {
    

    const {gptRecommendedMovies,gptTmdbmovies} = useSelector(store => store.gptSearch)

    if(!gptRecommendedMovies || !gptTmdbmovies)   
        return null;
    // console.log("gptRecommendedMovies:", gptRecommendedMovies);
    // console.log("gptTmdbmovies:", gptTmdbmovies);
    return(
        <div className="bg-black text-white opacity-80">
            {gptRecommendedMovies.map((movieName, index) => (
                <MovieList
                key={movieName}
                title={movieName}
                movies={gptTmdbmovies[index]}
                />
            ))}
        </div>
    )

}

export default GptMovieSuggestions;