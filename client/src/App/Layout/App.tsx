import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import HowToPlay from "../../Features/HowToPlay/HowToPlay";
import Statistics from "../../Features/Statistics/Statistics";
import "../../styles.css";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { useEffect } from "react";
import { fetchCurrentUser } from "../../Features/Account/accountSlice";

function App() {
  const game = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const colorMode = game.darkMode ? "dark" : "light";

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      mode: colorMode,
      background: {
        default: colorMode === "light" ? "#f8f8f8" : "#121213",
        // #3a3d40
      },
      primary: {
        main: colorMode === "light" ? "#fdfdfd" : "#f8f8f8",
        contrastText: "#f0f0f0",
      },
      secondary: {
        main: colorMode === "light" ? "#d3d6da" : "#a3a6aa",
        light: "#fff",
        contrastText: "#000",
      },
      text: {
        primary: colorMode === "light" ? "#121213" : "#f8f8f8",
        secondary: "#fdfdfd",
      },
      action: {
        active: colorMode === "light" ? "#121213" : "#f8f8f8",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: "23px",
            minHeight: "58px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <>
        <Statistics />
        <HowToPlay />
        <Outlet />
      </>
    </ThemeProvider>
  );
}

export default App;
