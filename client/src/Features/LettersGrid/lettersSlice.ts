import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Letter {
    value: number;
}

export interface LettersState {
    letters: {
        [key: string]: Letter
    };
    title: string;
    status: string;
}

const initialState: LettersState = {
    title: "Letters/Letter",
    status: "idle",
    letters: {
        "a": {value: 3},
        "b": {value: 3},
        "c": {value: 3},
        "d": {value: 3},
        "e": {value: 3},
        "f": {value: 3},
        "g": {value: 3},
        "h": {value: 3},
        "i": {value: 3},
        "j": {value: 3},
        "k": {value: 3},
        "l": {value: 3},
        "m": {value: 3},
        "n": {value: 3},
        "o": {value: 3},
        "p": {value: 3},
        "q": {value: 3},
        "r": {value: 3},
        "s": {value: 3},
        "t": {value: 3},
        "u": {value: 3},
        "v": {value: 3},
        "w": {value: 3},
        "x": {value: 3},
        "y": {value: 3},
        "z": {value: 3},
    }
}

export const lettersSlice = createSlice({
    name: "letters",
    initialState,
    reducers: {
        addValue: (state, action: PayloadAction<{letter: string, letterValue: number}>) => {
            const {letter, letterValue} = action.payload;
            state.letters[letter.toLowerCase()].value = letterValue;
        }}
})

export const {addValue} = lettersSlice.actions;