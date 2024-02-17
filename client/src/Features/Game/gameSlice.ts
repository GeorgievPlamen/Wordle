import { createSlice } from "@reduxjs/toolkit";


export interface GameState {
    initialized: boolean;
    darkMode: boolean;
    bulgarian: boolean;
}

const initialState: GameState = {
    initialized: false,
    darkMode: false,
    bulgarian: false
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        toggleDarkMode:  (state) => {
            state.darkMode = !state.darkMode;
        },
        toggleLanguage:  (state) => {
            state.bulgarian = !state.bulgarian;
        },
        initializeGame: (state) => {
            state.initialized = true;
        }
    }
    })

export const {toggleDarkMode, initializeGame} = gameSlice.actions;