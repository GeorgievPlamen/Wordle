import { createSlice } from "@reduxjs/toolkit";

interface Word {
    letters: string;
    completed: boolean;
}

export interface WordsState {
    words: {
        [key: number]: Word
    };
    title: string;
    values?: number[];
    status: string;
}

const initialState: WordsState = {
    title: "Keyboard/Word",
    status: "idle",
    words: {
        0: {letters: "", completed: false},
        1: {letters: "", completed: false},
        2: {letters: "", completed: false},
        3: {letters: "", completed: false},
        4: {letters: "", completed: false},
        5: {letters: "", completed: false},
    }
}

export const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
        addLetter: (state, action) => {
            if(!state.words[0].completed)
            {
                if(state.words[0].letters.length < 5)
                {
                    state.words[0].letters += action.payload
                }
                
                if(state.words[0].letters.length == 5)
                {
                    state.words[0].completed = true;
                }
            }
            else if(!state.words[1].completed)
            {
                if(state.words[1].letters.length < 5)
                {
                    state.words[1].letters += action.payload
                }
                
                if(state.words[1].letters.length == 5)
                {
                    state.words[1].completed = true;
                }
            }
            else if(!state.words[2].completed)
            {
                if(state.words[2].letters.length < 5)
                {
                    state.words[2].letters += action.payload
                }
                
                if(state.words[2].letters.length == 5)
                {
                    state.words[2].completed = true;
                }
            }
            else if(!state.words[3].completed)
            {
                if(state.words[3].letters.length < 5)
                {
                    state.words[3].letters += action.payload
                }
                
                if(state.words[3].letters.length == 5)
                {
                    state.words[3].completed = true;
                }
            }
            else if(!state.words[4].completed)
            {
                if(state.words[4].letters.length < 5)
                {
                    state.words[4].letters += action.payload
                }
                
                if(state.words[4].letters.length == 5)
                {
                    state.words[4].completed = true;
                }
            }
            else if(!state.words[5].completed)
            {
                if(state.words[5].letters.length < 5)
                {
                    state.words[5].letters += action.payload
                }
                
                if(state.words[5].letters.length == 5)
                {
                    state.words[5].completed = true;
                }
            }
            
        },
        removeLetter: (state) => {
            if(!state.words[0].completed)
            {
                state.words[0].letters = state.words[0].letters.substring(0,state.words[0].letters.length - 1);
            }
            else if(!state.words[1].completed)
            {
                state.words[1].letters = state.words[1].letters.substring(0,state.words[1].letters.length - 1);
            }
            else if(!state.words[2].completed)
            {
                state.words[2].letters = state.words[2].letters.substring(0,state.words[2].letters.length - 1);
            }
            else if(!state.words[3].completed)
            {
                state.words[3].letters = state.words[3].letters.substring(0,state.words[3].letters.length - 1);
            }
            else if(!state.words[4].completed)
            {
                state.words[4].letters = state.words[4].letters.substring(0,state.words[4].letters.length - 1);
            }
            else if(!state.words[5].completed)
            {
                state.words[5].letters = state.words[5].letters.substring(0,state.words[5].letters.length - 1);
            }
        },
    }
})

export const {addLetter,removeLetter} = wordSlice.actions;