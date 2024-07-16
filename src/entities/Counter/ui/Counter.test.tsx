import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { Counter } from "./Counter";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
describe('Counter', () => {
    test('increment counter', () => {
        const initialState = { counter: { value: 10 } };
        renderComponent(<Counter />, {initialState});
        const counterTitle = screen.getByTestId("counter-title");
        expect(counterTitle).toContainHTML("10");
        userEvent.click(screen.getByTestId("counter-increment"));
        expect(counterTitle).toContainHTML("11");
    });
    test('decrement counter', () => {
        const initialState = { counter: { value: 10 } };
        renderComponent(<Counter />, {initialState});
        const counterTitle = screen.getByTestId("counter-title");
        expect(counterTitle).toContainHTML("10");
        userEvent.click(screen.getByTestId("counter-decrement"));
        expect(counterTitle).toContainHTML("9");
    });
});