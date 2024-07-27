import { ThemeDecorator } from "shared/config/storybook";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook";
import { LoginForm } from "./LoginForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "features/LoginForm",
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [
    (Story) => <>{ThemeDecorator(Theme.DARK)(Story)}</>,
    (Story) => (
      <>
        {StoreDecorator(
          { login: { username: "admin", password: "12345", isLoading: false } },
          Story
        )}
      </>
    ),
  ],
};

export const Error: Story = {
  decorators: [
    (Story) => (
      <>
        {StoreDecorator(
          {
            login: {
              username: "admin",
              password: "12345",
              error: "user not found",
            },
          },
          Story
        )}
      </>
    ),
  ],
};

export const DisableForm : Story = {
    decorators: [
      (Story) => (
        <>
          {StoreDecorator(
            {
              login: {
                username: "admin",
                password: "12345",
                isLoading: true
              },
            },
            Story
          )}
        </>
      ),
    ],
  };