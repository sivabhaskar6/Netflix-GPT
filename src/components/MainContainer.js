import { useSelector } from "react-redux";



const MainContainer = () =>{

    const movies = useSelector((store) => store.movie?.playingMovies);
    const mainMovie = movies?.[0];

    if (!mainMovie) return <div>Loading...</div>;
    console.log(mainMovie);


    return(
        <div className="main-container">
            Main Container

        </div>
    )
}
export default MainContainer;