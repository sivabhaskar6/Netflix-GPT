import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../utils/constants";

const GptSearchPage = () => {
    return(
        <div >
            <div className="absolute -z-10 bg-gradient-to-r from-black ">
                <img src={BG_IMAGE} alt="bg img"  className="w-screen h-screen object-cover "/>
            <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearchPage;