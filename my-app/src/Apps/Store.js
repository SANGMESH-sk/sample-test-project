import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../Feature/gituserSlice";
import postReducer from "../Feature/posts/postSlice"
import userReducer from '../Feature/Users/userSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: userReducer
    }
})