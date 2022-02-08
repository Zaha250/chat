import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export default userSlice.reducer;