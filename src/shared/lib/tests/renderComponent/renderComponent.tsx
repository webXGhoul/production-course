import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router";
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

interface renderComponentOptions {
    route?: string;
    initialState?: Partial<StateSchema>
}
export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {
    const { route = "/", initialState} = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {children}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};