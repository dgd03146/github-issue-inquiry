import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "@/lib/styles/GlobalStyle";
import { ContextAPIProvider } from "./lib/store/IssueContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextAPIProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ContextAPIProvider>
  </React.StrictMode>
);
