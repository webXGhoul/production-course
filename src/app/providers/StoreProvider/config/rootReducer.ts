import { ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername";
import { StateSchema } from "./StateSchema";

export const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  login: loginReducer,
};
