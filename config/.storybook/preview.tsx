import type { Preview } from "@storybook/react";
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { I18nDecorator, RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook'
import React, { Suspense } from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        {I18nDecorator(Story)}
      </>
    ),
    (Story) => <>{StyleDecorator(Story)}</>,
    (Story) => <>
      {ThemeDecorator(Theme.LIGHT)(Story)}
    </>,
    (Story) => (
      <>
        {RouterDecorator(Story)}
      </>
    ),
    (Story) => <Suspense fallback><Story /></Suspense>
  ],
};

export default preview;
