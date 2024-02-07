import { Box, Typography } from "@mui/material";
import "./styles.css";
import TestGetWord from "./App/Components/TestGetWord";
import LettersGrid from "./App/Components/LettersGrid";
import KeyBoardEn from "./App/Components/KeyBoardEn";

function App() {
  return (
    <>
      <Box
        display={"flex"}
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold" }}
          color={"textPrimary"}
        >
          Hello World
        </Typography>
        <LettersGrid />
        <KeyBoardEn />
        <TestGetWord />
      </Box>
    </>
  );
}

export default App;
