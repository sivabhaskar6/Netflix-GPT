import { useRef }from "react";
import openAi from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setGptRecommendedMovies } from "../utils/gptSlice";


const GptSearchBar = () => {

    const dispatch = useDispatch()
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie)=>{
        const response = await 
            fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=true&language=en-US&page=1`,API_OPTIONS)
        const json = await response.json();
        const data = json.results;
        // console.log(data);

        return data;

    }
    

    const handleSearchClick = async () => {
        console.log(searchText.current.value);

         const response = await openAi.responses.create({
            model: "gpt-5.4-mini",
            input: `You are a  Movie Recommendation System that provides movie suggestions suggest some moves for the query: ${searchText.current.value} only give me best top 5 movie with comma separated. example movies: happy,golmar,saalar,pushpa,bahubali`,
            store: true,
        });

        const recommenedMovies = response.output_text?.split(",");
        const promiseArray = recommenedMovies.map( (movie) => searchMovieTMDB(movie) );

        const gptrecommenedMoviesArray = await Promise.all(promiseArray);
        dispatch(setGptRecommendedMovies({
            tmdbMovies:gptrecommenedMoviesArray,
            gptMoviesNames:recommenedMovies
        }));

    }


    return(
        <div className="flex  justify-center">
            <div className="inline-flex mt-44  gap-2 bg-black p-4 rounded-md">
                <form
                    onSubmit={(e)=> e.preventDefault()}
                >
                    <input className= "w-[600px] border-gray-300 rounded-lg py-2 px-4 focus:outline-blue-500" 
                    type="text" placeholder="What movies could you like to watch today?" ref={searchText} /> 
                </form>
                <button className="px-6 py-2  bg-red-600 text-white rounded-lg"
                onClick={handleSearchClick}
                >Search</button>
            </div>
        </div>
    
    )
}

export default GptSearchBar;