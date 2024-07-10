import type { StoryFn } from "@storybook/react";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";


export const I18nDecorator = (Story: StoryFn) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>);
}