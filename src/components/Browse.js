import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingMovies();

  const { showGptSearch } = useSelector((state) => state.gptSearch);

  return (
    <div className="overflow-x-hidden">
      <Header/>
      {showGptSearch?
        (<GptSearchPage/>)
        :(
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
      
      
    </div>
  )
};

export default Browse;