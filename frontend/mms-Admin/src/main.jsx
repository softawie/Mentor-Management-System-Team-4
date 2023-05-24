import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import StatusPage from "./components/statusPage/status-page.component";

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
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  root.render(
    <StatusPage
      code="403"
      title={"403"}
      helperText={""}
      btnText={"Go to Dashboard"}
    />,
    document.getElementById("root")
  );
}
