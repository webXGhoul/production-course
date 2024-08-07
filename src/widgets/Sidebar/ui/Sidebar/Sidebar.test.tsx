import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { Sidebar } from "./Sidebar";

describe('Sidebar', () => {
    test("Render sidebar", () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("Close/open sidebar", () => {
        renderComponent(
            <Sidebar />
        );
        const btn = screen.getByLabelText('sidebar-open-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});


