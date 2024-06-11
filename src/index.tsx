import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { Suspense } from "react";

import "./shared/config/i18n/i18n";

render(
  <Suspense fallback={""}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
