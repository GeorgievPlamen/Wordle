import { createSlice } from "@reduxjs/toolkit";


export interface DisplayState {
    display: string;
}

const initialState: DisplayState = {
    display: "none"
}

export const howToPlaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        toggleDisplay:  (state) => {
            if(state.display === "none")
            {
                state.display = "block"
            }
            else if(state.display === "block")
            {
                state.display = "none"
            }
        }}
    })

export const {toggleDisplay} = howToPlaySlice.actions;