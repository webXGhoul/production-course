import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: "widgets/Navbar"
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [
        (Story) => (
            <>
                {ThemeDecorator(Theme.DARK)(Story)}
            </>
        )
    ]
};