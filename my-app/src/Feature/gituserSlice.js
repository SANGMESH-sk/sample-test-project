import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getAlldata = createAsyncThunk("gitUsers", async () =>
{
    const response = await fetch("https://api.github.com/users");
    const result = response.json();
    return result;
})
export const gitUser = createSlice({
    name: 'gitUser',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [getAlldata.pending]: (state, action) =>
        {
            state.loding = true;
        },
        [getAlldata.fulfilled]: (state, action) =>
        {
            state.loding = false;
            state.users = action.payload;
        },
        [getAlldata.rejected]: (state, action) =>
        {
            state.loding = false;
            state.error = action.payload;
        }
    }
})
export default gitUser.reducer



