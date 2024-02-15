import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface StatsState {
    display: string;
    first?: number,
    second?: number,
    third?: number,
    fourth?: number,
    fifth?: number,
    sixth?: number,
    firstBg?: number,
    secondBg?: number,
    thirdBg?: number,
    fourthBg?: number,
    fifthBg?: number,
    sixthBg?: number,
    failedEn?: number,
    failedBg?: number,
}

const initialState: StatsState = {
    display: "none"
}

export const statsSlice = createSlice({
    name: "displayStats",
    initialState,
    reducers: {
        toggleStatsDisplay:  (state) => {
            if(state.display === "none")
            {
                state.display = "block"
            }
            else if(state.display === "block")
            {
                state.display = "none"
            }
        },
        addStats:  (state, action: PayloadAction<
            {first?: number,
            second?: number,
            third?: number,
            fourth?: number,
            fifth?: number,
            sixth?: number,
            firstBg?: number,
            secondBg?: number,
            thirdBg?: number,
            fourthBg?: number,
            fifthBg?: number,
            sixthBg?: number,
            failedEn?: number,
            failedBg?: number,}>) => {
            state.first = action.payload.first;
            state.second = action.payload.second;
            state.third = action.payload.third;
            state.fourth = action.payload.fourth;
            state.fifth = action.payload.fifth;
            state.sixth = action.payload.sixth;
            state.firstBg = action.payload.firstBg;
            state.secondBg = action.payload.secondBg;
            state.thirdBg = action.payload.thirdBg;
            state.fourthBg = action.payload.fourthBg;
            state.fifthBg = action.payload.fifthBg;
            state.sixthBg = action.payload.sixthBg;
            state.failedEn = action.payload.failedEn;
            state.failedBg = action.payload.failedBg;
        },
    }
    })

export const {toggleStatsDisplay, addStats} = statsSlice.actions;