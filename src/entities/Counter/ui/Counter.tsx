import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { Button } from "shared/ui";
interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1 data-testid="counter-title">Value: ${value}</h1>
            <Button data-testid="counter-increment" onClick={() => dispatch(counterActions.increment())}>Increment</Button>
            <Button data-testid="counter-decrement" onClick={() => dispatch(counterActions.decrement())}>Decrement</Button>
        </div>
    );
};