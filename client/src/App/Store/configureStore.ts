import { configureStore } from "@reduxjs/toolkit";
import { wordSlice } from "../../Features/Keyboard/wordSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { lettersSlice } from "../../Features/LettersGrid/lettersSlice";


export const store = configureStore({
    reducer: {
        word: wordSlice.reducer,
        letters: lettersSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;