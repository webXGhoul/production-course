import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router";
import i18nForTests from 'shared/config/i18n/i18nForTests';

interface renderComponentOptions {
    route?: string;
}
export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {
    const { route = "/" } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {children}
            </I18nextProvider>
        </MemoryRouter>
    );
};