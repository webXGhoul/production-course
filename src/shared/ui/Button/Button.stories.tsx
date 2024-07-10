import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSizes, ButtonTheme } from './Button';
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
        theme: ButtonTheme.CLEAR
    },
};



export const Outline: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.OUTLINE
    },
    decorators: [
        (Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>
    ]
};

export const Background: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.BACKGROUND
    }
}
export const BackgroundInverted: Story = {
    args: {
        ...Primary.args,
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}
export const Square: Story = {
    args: {
        children: "<",
        square: true
    }
}
export const SquareSizeM: Story = {
    args: {
        children: "<",
        square: true,
        size: ButtonSizes.M,
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}
export const SquareSizeL: Story = {
    args: {
        children: "<",
        square: true,
        size: ButtonSizes.L,
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}
export const SquareSizeXL: Story = {
    args: {
        children: "<",
        square: true,
        size: ButtonSizes.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
}

export const SizeM: Story = {
    args: {
        ...Primary.args,
        size: ButtonSizes.M,
    }
}
export const SizeL: Story = {
    args: {
        ...Primary.args,
        size: ButtonSizes.L,
    }
}
export const SizeXL: Story = {
    args: {
        ...Primary.args,
        size: ButtonSizes.XL,
    }
}