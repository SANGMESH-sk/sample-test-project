import {configureStore} from "@reduxjs/toolkit"
import gitUser from "../Feature/gituserSlice"
export const store = configureStore({
    reducer: {
        app: gitUser,
    }
})