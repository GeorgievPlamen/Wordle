import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Word {
    letters: string;
    completed: boolean;
    values: number[];
}

export interface WordsState {
    words: {
        [key: number]: Word
    };
    title: string;
    status: string;
    completed: boolean;
}

const initialState: WordsState = {
    title: "Keyboard/Word",
    status: "idle",
    completed: false,
    words: {
        0: {letters: "", completed: false,values: []},
        1: {letters: "", completed: false,values: []},
        2: {letters: "", completed: false,values: []},
        3: {letters: "", completed: false,values: []},
        4: {letters: "", completed: false,values: []},
        5: {letters: "", completed: false,values: []},
    }
}

export const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
        addLetter: (state, action) => {
            if (state.completed) 
            {
                return;
            }    
            if(!state.words[0].completed)
            {
                if(state.words[0].letters.length < 5)
                {
                    state.words[0].letters += action.payload
                }
            }
            else if(!state.words[1].completed)
            {
                if(state.words[1].letters.length < 5)
                {
                    state.words[1].letters += action.payload
                }
            }
            else if(!state.words[2].completed)
            {
                if(state.words[2].letters.length < 5)
                {
                    state.words[2].letters += action.payload
                }
            }
            else if(!state.words[3].completed)
            {
                if(state.words[3].letters.length < 5)
                {
                    state.words[3].letters += action.payload
                }
            }
            else if(!state.words[4].completed)
            {
                if(state.words[4].letters.length < 5)
                {
                    state.words[4].letters += action.payload
                }
            }
            else if(!state.words[5].completed)
            {
                if(state.words[5].letters.length < 5)
                {
                    state.words[5].letters += action.payload
                }
            }
            
        },
        removeLetter: (state) => {
            if (state.completed) 
            {
                return;
            }    
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
        completeWord: (state, action: PayloadAction<{values: number[]}>) => {
            const {values} = action.payload;
            if (!state.words[0].completed){
                state.words[0].values = values;
                state.words[0].completed = true;
            } else if (!state.words[1].completed) {
                state.words[1].values = values;
                state.words[1].completed = true;
            } else if (!state.words[2].completed) {
                state.words[2].values = values;
                state.words[2].completed = true;
            } else if (!state.words[3].completed) {
                state.words[3].values = values;
                state.words[3].completed = true;
            } else if (!state.words[4].completed) {
                state.words[4].values = values;
                state.words[4].completed = true;
            } else if (!state.words[5].completed) {
                state.words[5].values = values;
                state.words[5].completed = true;
            }

            if(values[0] == 0 
                && values[1] == 0 
                && values[2] == 0
                && values[3] == 0
                && values[4] == 0)
            {
                state.completed = true;
            }
        }
    }
})

export const {addLetter,removeLetter,completeWord} = wordSlice.actions;