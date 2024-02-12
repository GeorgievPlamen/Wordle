import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "whitesmoke",
      // #3a3d40
    },
    primary: {
      main: "#000",
      contrastText: "#f0f0f0",
    },
    secondary: {
      main: "#d3d6da",
      light: "#fff",
      contrastText: "#000",
    },
    text: {
      primary: "#000",
      secondary: "#fdfdfd",
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
