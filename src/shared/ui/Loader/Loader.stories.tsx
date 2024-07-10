import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: "shared/Loader",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [
        (Story) => <>
            {ThemeDecorator(Theme.DARK)(Story)}</>
    ]
};

