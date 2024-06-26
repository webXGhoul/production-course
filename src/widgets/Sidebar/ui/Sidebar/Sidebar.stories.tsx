import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: "widgets/Sidebar"
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        (Story) => <>{ThemeDecorator(Theme.LIGHT)(Story)}</>
    ]
};
export const Dark: Story = {
    decorators: [
        (Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>
    ]
};