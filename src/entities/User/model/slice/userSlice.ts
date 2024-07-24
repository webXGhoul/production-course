import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/userSchema";

const initialState: UserSchema  = {
    
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;