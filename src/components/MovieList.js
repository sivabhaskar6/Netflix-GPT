import MovieCard from "./MovieCard.js";


const MovieList = ({ title, movies }) =>{

    console.log("movies", movies);

    return(
        <div className="movie-list px-6">
            <h2 className="text-3xl py-4 text-white">{title}</h2>
            <div className="flex overflow-x-scroll scrollbar-hide ">
                <div className="movie-cards flex">
                    {movies?.map((movie) => (
                        <MovieCard posterPath={movie?.poster_path}  title={movie.title} key={movie.id}/> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;