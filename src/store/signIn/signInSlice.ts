import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";
import {signIn} from "./services";

const signInSlice = createSlice({
    name: 'signInSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state:any, action):void => {
                state.auth.error = null;
                state.auth.isLoad = action.payload;
            })
            .addCase(signIn.rejected, (state:any, action):void => {
                state.auth.error = action.payload;
                state.auth.isLoad = false;
            })
    }
});

export const {  } = signInSlice.actions;
export default signInSlice.reducer;