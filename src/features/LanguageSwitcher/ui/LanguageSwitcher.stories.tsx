import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook';
import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
    component: LanguageSwitcher,
    title: "features/LanguageSwitcher",
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

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