import { createSlice } from "@reduxjs/toolkit";


export interface GameState {
    initialized: boolean;
    darkMode: boolean;
}

const initialState: GameState = {
    initialized: false,
    darkMode: false
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        toggleDarkMode:  (state) => {
            state.darkMode = !state.darkMode;
        },
        initializeGame: (state) => {
            state.initialized = true;
        }
    }
    })

export const {toggleDarkMode, initializeGame} = gameSlice.actions;