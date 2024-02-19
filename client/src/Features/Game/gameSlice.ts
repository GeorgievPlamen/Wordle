import { createSlice } from "@reduxjs/toolkit";


export interface GameState {
    initialized: boolean;
    darkMode: boolean;
    bulgarian: boolean;
    loading: boolean;
}

const initialState: GameState = {
    initialized: false,
    darkMode: false,
    bulgarian: false,
    loading: false
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
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        }
    }
    })

export const {toggleDarkMode, initializeGame,toggleLanguage,toggleLoading} = gameSlice.actions;