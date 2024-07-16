import { counterReducer } from './model/slice/counterSlice';
import { Counter } from 'entities/Counter/ui/Counter';
import { CounterSliceSchema } from './model/types/counterSchema';

export {CounterSliceSchema, Counter, counterReducer};