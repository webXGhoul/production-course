import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    component: NotFoundPage,
    title: "pages/NotFoundPage",
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

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