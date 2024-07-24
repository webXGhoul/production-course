import { counterActions, counterReducer } from "./counterSlice";
import { CounterSliceSchema } from "../types/counterSchema";

describe('counterSlice', () => {
    test('increment counter', () => {
        const state: CounterSliceSchema = {
            value: 10
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement counter', () => {
        const state: CounterSliceSchema = {
            value: 10
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});