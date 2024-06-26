import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';


const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: "shared/AppLink",
};
export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Primary link',
        theme: AppLinkTheme.PRIMARY
    },
};
export const Secondary: Story = {
    args: {
        children: 'Secondary Link',
        theme: AppLinkTheme.SECONDARY
    },
};

