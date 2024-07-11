import type { StoryContext, StoryFn } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import i18n from "./i18n";


export const I18nDecorator = (Story: StoryFn, context: StoryContext) => {
    const { locale } = context.globals;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <I18nextProvider i18n={i18n}>
            <Story />
        </I18nextProvider>);
}