import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(res => {
    // @ts-expect-error
    setTimeout(() => res(import("./AboutPage")), 1000);
}));
