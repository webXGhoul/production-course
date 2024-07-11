import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent"
import { Modal } from "./Modal";
import { screen } from "@testing-library/react";
describe('Modal test', () => {
    test('Open modal', () => {
        renderComponent(<Modal isOpen={true}/>);
        expect(screen.getByTestId("modal")).toBeInTheDocument()
    });
});