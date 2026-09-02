import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";


const SecondaryContainer = () =>{
    const movies = useSelector((state) => state.movie);
    const {playingMovies,popularMovies,trendingMovies,feelGoodMovies} = movies
    return (
        movies && (
            <div className="bg-black">
                <div className="relative -mt-39 z-20 pl-12">
                    <MovieList title={"Popular Movies"}  movies={popularMovies}/>
                    <MovieList title={"Trending Movies"}  movies={playingMovies}/>
                    <MovieList title={"Most Viewed Movies"}  movies={trendingMovies}/>
                    <MovieList title={"Feel Good Movies"}  movies={feelGoodMovies}/>
                    <MovieList title={"Released Recently"}  movies={playingMovies}/>
                </div>
            </div>
        )
    )
}

export default SecondaryContainer;