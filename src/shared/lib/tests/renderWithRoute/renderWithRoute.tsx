import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

interface renderWithRouterOptions {
    route?: string
}

export const renderWithRouter = (children: ReactNode, { route = "/" }: renderWithRouterOptions) =>
    render(
        <MemoryRouter initialEntries={[route]}>
            {children}
        </MemoryRouter>);