import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Text, TextTheme } from "./Text";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "shared/Text",
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: {
    title: "Title",
    content: "Content",
  },
};

export const LightError: Story = {
  args: {
    ...Light.args,
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const OnlyContent: Story = {
  args: {
    content: "Content",
  },
};

export const Dark: Story = {
  args: { ...Light.args },
  decorators: [(Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>],
};
export const DarkError: Story = {
  args: { ...LightError.args},
  decorators: [(Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>],
};
