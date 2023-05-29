import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";
import store from "./store";
import theme from "./theme/theme";

const container = document.getElementById("root");
const root = createRoot(container);
if (window.self === window.top) {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <BrowserRouter>
            <CookiesProvider>
              <App />
            </CookiesProvider>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
} 
