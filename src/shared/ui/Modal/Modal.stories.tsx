import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: "shared/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptate. Veritatis dolor sunt tempora impedit possimus repudiandae suscipit, quasi consequuntur incidunt culpa. Ad exercitationem fugit, officiis nihil sint dicta! Quisquam?",
        isOpen: true,
    }
};
export const Dark: Story = {
    args: {
        ...Light.args,
    },
    decorators: [
        (Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>
    ]
};