import { Box, Typography } from "@mui/material";
import "./styles.css";
import TestGetWord from "./App/Components/TestGetWord";
import LettersGrid from "./Features/LettersGrid/LettersGrid";
import KeyBoardEn from "./Features/Keyboard/KeyBoardEn";
import { useAppSelector } from "./App/Store/configureStore";
import { useEffect } from "react";

function App() {
  const words = useAppSelector((state) => state.word);
  const game = words.completed;

  useEffect(() => {
    if (game === true) {
      setTimeout(() => {
        alert("Splendid!");
      }, 2000);
    }
  }, [game]);
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
