import {createSlice, nanoid} from "@reduxjs/toolkit";


const initialState = [
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action)
            {
                state.push(action.payload)
            },
            prepare(title, content, userId)
            {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})
export const selectAllposts = (state) => state.posts;
export const {postAdded} = postSlice.actions;
export default postSlice.reducer;