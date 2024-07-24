import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { screen } from "@testing-library/react";

import { Modal } from "./Modal";
describe('Modal test', () => {
    test('Open modal', () => {
        renderComponent(<Modal isOpen={true}/>);
        expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
});