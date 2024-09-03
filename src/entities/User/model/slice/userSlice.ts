import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER_LOCAL_STORAGE_KEY } from "shared/consts";
import { User, UserSchema } from "../types/userSchema";

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
