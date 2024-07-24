import { Counter } from 'entities/Counter/ui/Counter';
import { counterReducer } from './model/slice/counterSlice';
import { CounterSliceSchema } from './model/types/counterSchema';

export {CounterSliceSchema, Counter, counterReducer};