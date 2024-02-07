import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <App /> }],
  },
]);

const theme = createTheme({
  palette: {
    background: {
      default: "whitesmoke",
      // #3a3d40
    },
    primary: {
      main: "#be3144",
      contrastText: "#f0f0f0",
    },
    secondary: {
      main: "#d3d6da",
      contrastText: "#000",
    },
    text: {
      primary: "#000",
      secondary: "#fdfdfd",
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
