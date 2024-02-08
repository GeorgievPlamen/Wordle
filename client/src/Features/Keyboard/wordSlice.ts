import { createSlice } from "@reduxjs/toolkit";

export interface WordState {
    data: string;
    title: string;
    values?: number[];
}

const initialState: WordState = {
    data: "",
    title: "Keyboard/Word"
}

export const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
        addLetter: (state, action) => {
            state.data += action.payload
        },
        removeLetter: (state) => {
            state.data = state.data.substring(0,state.data.length - 1);
        },
    }
})

export const {addLetter,removeLetter} = wordSlice.actions;