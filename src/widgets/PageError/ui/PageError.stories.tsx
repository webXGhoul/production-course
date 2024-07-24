import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    component: PageError,
    title: "widgets/PageError",
};

export default meta;
type Story = StoryObj<typeof PageError>;

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