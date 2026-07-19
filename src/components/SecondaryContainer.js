import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";


const SecondaryContainer = () =>{
    const movies = useSelector((state) => state.movie.playingMovies);
    return (
        movies && (
            <div className="bg-black">
                <div className="relative -mt-39 z-20 pl-12">
                    <MovieList title={"Popular Movies"}  movies={movies}/>
                    <MovieList title={"Trending Movies"}  movies={movies}/>
                    <MovieList title={"Most Viewed Movies"}  movies={movies}/>
                    <MovieList title={"Feel Good Movies"}  movies={movies}/>
                    <MovieList title={"Released Recently"}  movies={movies}/>
                </div>
            </div>
        )
    )
}

export default SecondaryContainer;