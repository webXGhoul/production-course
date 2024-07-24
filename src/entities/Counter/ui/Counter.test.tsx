import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Counter } from "./Counter";
describe('Counter', () => {
    test('increment counter', async () => {
        const initialState = { counter: { value: 10 } };
        renderComponent(<Counter />, {initialState});
        const counterTitle = screen.getByTestId("counter-title");
        expect(counterTitle).toHaveTextContent("10");
        await userEvent.click(screen.getByTestId("counter-increment"));
        expect(counterTitle).toHaveTextContent("11");
    });
    test('decrement counter', async () => {
        // const initialState = { counter: { value: 10 } };
        renderComponent(<Counter />, {initialState: {counter: {value: 10}}});
        const counterTitle = screen.getByTestId("counter-title");
        expect(counterTitle).toHaveTextContent("10");
        await userEvent.click(screen.getByTestId("counter-decrement"));
        expect(counterTitle).toHaveTextContent("9");
    });
});