import type { Preview } from "@storybook/react";
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { I18nDecorator, RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook'
import React, { Suspense } from "react";

const preview: Preview = {
  decorators: [
    (Story) => <>{StyleDecorator(Story)}</>,
    (Story) => <>
      {ThemeDecorator(Theme.LIGHT)(Story)}
    </>,
    (Story) => (
      <>
        {RouterDecorator(Story)}
      </>
    ),
    (Story) => (
      <>
        {I18nDecorator(Story)}
      </>
    )
  ]
};

export default preview;
