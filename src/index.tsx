import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
import { Suspense } from "react";
import App from "./app/App";

import "./shared/config/i18n/i18n";
import "app/styles/index.scss";

render(
  <Suspense fallback={""}>
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  </Suspense>,
  document.getElementById("root")
);
