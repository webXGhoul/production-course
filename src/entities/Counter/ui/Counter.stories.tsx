import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './Counter';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Counter> = {
    component: Counter,
    title: "entities/Counter",
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators: [(Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>]
};