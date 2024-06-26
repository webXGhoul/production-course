import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: "pages/MainPage",
};

export default meta;
type Story = StoryObj<typeof MainPage>;

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