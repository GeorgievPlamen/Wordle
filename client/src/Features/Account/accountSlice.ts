/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { User } from "../../App/Models/user";
import agent from "../../App/api/agent";
import { FieldValues } from "react-hook-form";
import { router } from "../../App/Routes/routes";


export interface AccountState {
    user: User | null;
    username: string | null;
}

const initialState: AccountState = {
    user: null,
    username: null
}

export const signInUser = createAsyncThunk<User, FieldValues>(
    "account/singInUser",
    async (data, thunkAPI) => {
        try {
            const user = await agent.Account.login(data);
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        } catch (error: any) {
            return  thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

export const fetchCurrentUser = createAsyncThunk<User>(
    "account/fetchCurrentUser",
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem("user")!)))
        try {
            const user = await agent.Account.currentUser();
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        } catch (error: any) {
            return  thunkAPI.rejectWithValue({error: error.data})
        }
    },{
        condition: () => {
            if (!localStorage.getItem("user")) return false;
        }
    }
)

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            router.navigate("/");
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchCurrentUser.rejected, (state) => {
            state.user = null;
            state.username = null;
            localStorage.removeItem("user");
            router.navigate("/");
        })
        builder.addMatcher(isAnyOf(signInUser.fulfilled,
            fetchCurrentUser.fulfilled),
             (state, action) => {
                state.user = action.payload;
             }
        );
        builder.addMatcher(isAnyOf(signInUser.rejected),
        (_state, action) => {
            console.log(action.payload)
        })
    })
})

export const {logOut,setUser, setUsername} = accountSlice.actions;