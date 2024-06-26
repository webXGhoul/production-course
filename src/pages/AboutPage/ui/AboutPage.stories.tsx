import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';

const meta: Meta<typeof AboutPage> = {
    component: AboutPage,
    title: "pages/AboutPage",
    decorators: [
        (Story) => <Suspense fallback={<PageLoader />}><Story /></Suspense>
    ]
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators: [
        (Story) =>
            <>
                {ThemeDecorator(Theme.DARK)(Story)}
            </>
    ]
};