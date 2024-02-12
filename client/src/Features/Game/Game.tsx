import { Box } from "@mui/material";
import { useEffect } from "react";
import TestGetWord from "../../App/Components/TestGetWord";
import { useAppSelector } from "../../App/Store/configureStore";
import KeyBoardEn from "../Keyboard/KeyBoardEn";
import LettersGrid from "../LettersGrid/LettersGrid";
import Navbar from "../../App/Components/Navbar";

export default function Game() {
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
      <Navbar />
      <Box
        display={"flex"}
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <LettersGrid />
        <KeyBoardEn />
        <TestGetWord />
      </Box>
    </>
  );
}
