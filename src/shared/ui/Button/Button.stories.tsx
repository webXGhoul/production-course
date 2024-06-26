import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
const meta: Meta<typeof Button> = {
    component: Button,
    title: "shared/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};
export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR
    },
};



export const Outline: Story = {
    args: {
        ...Primary.args,
        children: '📚📕📈🤓',
        theme: ButtonTheme.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        ...Primary.args,
        children: '📚📕📈🤓',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [
        (Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>
    ]
};
