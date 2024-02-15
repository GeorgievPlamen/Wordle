import { configureStore } from "@reduxjs/toolkit";
import { wordSlice } from "../../Features/Keyboard/wordSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { lettersSlice } from "../../Features/LettersGrid/lettersSlice";
import { howToPlaySlice } from "../../Features/HowToPlay/howToPlaySlice";
import { statsSlice } from "../../Features/Statistics/statisticsSlice";


export const store = configureStore({
    reducer: {
        word: wordSlice.reducer,
        letters: lettersSlice.reducer,
        howToPlay: howToPlaySlice.reducer,
        stats: statsSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;