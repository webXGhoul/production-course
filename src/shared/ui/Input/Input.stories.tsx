import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
    title: "shared/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {

};
export const Dark: Story = {
    args: {
        value: "\n"
    },

    decorators: [
        (Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</> 
    ]
};