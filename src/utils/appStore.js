import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptSearchreducer from "./gptSlice"


const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movie:movieReducer,
            gptSearch: gptSearchreducer,
        }
    }
)

export default appStore;