import {createSlice} from "@reduxjs/toolkit";
import initialState from "./initialState";
import {dialogTypes} from "../../types";

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setCurrentDialog(state, {payload}) {
            const dialog = state.dialogs.find((item:dialogTypes) => item._id === payload);
            if(dialog) {
                state.currentDialog = dialog;
            }
        }
    }
});

export const {setCurrentDialog} = dialogsSlice.actions;
export default dialogsSlice.reducer;