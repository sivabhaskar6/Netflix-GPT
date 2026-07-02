import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

import Header from "./Header";



const Body =()=>{


    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<div> 
                <Header/>
                <Login/>
            </div>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ])

   
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;