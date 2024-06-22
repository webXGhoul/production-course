import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import renderWithTranslate from "shared/lib/tests/renderWithTranslate/renderWithTranslate"

describe('Sidebar', () => {
    test("Render sidebar", () => {
        renderWithTranslate(<Sidebar />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })
    test("Close/open sidebar", () => {
        renderWithTranslate(<Sidebar />)
        const btn = screen.getByLabelText('sidebar-open-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    })
})


