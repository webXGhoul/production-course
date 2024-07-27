import type { Decorator, Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
import {
  I18nDecorator,
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
} from "../../src/shared/config/storybook";
import React, { Suspense } from "react";
import { StoreProvider } from "../../src/app/providers/StoreProvider";
import type { GlobalTypes } from "../../node_modules/@storybook/types/dist/index";

const decorators: Decorator[] = [
  (Story) => (
    <Suspense fallback>
      <StoreProvider>
        <Story />
      </StoreProvider>
    </Suspense>
  ),
  (Story) => (
    <div id="root">
      <Story />
    </div>
  ),
  (Story) => <>{StyleDecorator(Story)}</>,
  (Story) => <>{ThemeDecorator(Theme.LIGHT)(Story)}</>,
  (Story) => <>{RouterDecorator(Story)}</>,
  (Story, context) => <>{I18nDecorator(Story, context)}</>,
];

const globalTypes: GlobalTypes = {
  locale: {
    name: "locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Russian" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  decorators: decorators,
  globalTypes: globalTypes,
};

export default preview;
