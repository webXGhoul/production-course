import { createSlice } from "@reduxjs/toolkit";
import { CounterSliceSchema } from "../types/counterSchema";

const initialState: CounterSliceSchema  = {
    value: 0
};

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const counterActions = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;