import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import axios from "axios";
import { USER_LOCAL_STORAGE_KEY } from "shared/consts";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (userData, thunkApi) => {
  try {
    const { data } = await axios.post<User>(
      "http://localhost:8000/login",
      userData
    );
    if (!data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data));
    thunkApi.dispatch(userActions.setAuthData(data));

    return data;
  } catch (error) {
    const errMsg: string = error?.response?.data?.message;
    return thunkApi.rejectWithValue(errMsg);
  }
});
