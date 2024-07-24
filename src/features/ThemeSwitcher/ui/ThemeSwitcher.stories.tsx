import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: "features/ThemeSwitcher",
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

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

