import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";
import type { StateSchema } from "./StateSchema";

export function createReduxStore(initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
