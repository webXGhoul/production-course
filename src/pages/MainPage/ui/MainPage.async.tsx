import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(res => {
    // @ts-expect-error
    setTimeout(() => res(import("./MainPage")), 1000)
}));
