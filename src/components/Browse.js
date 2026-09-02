import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useFeelGoodMovies from "../hooks/useFeelGoodMovies";


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useFeelGoodMovies();
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