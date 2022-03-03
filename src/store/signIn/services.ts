import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {setUser} from "../user/userSlice";

type Inputs = {
    login: string
}

export const signIn = createAsyncThunk(
    'signIn/auth',
    async (data:Inputs, {dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post('/api/auth', data);
            if(response.data.error) {
                return rejectWithValue(response.data.error);
            }
            dispatch(setUser(response.data.user));
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);