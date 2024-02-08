import { Box } from "@mui/material";
import KeyBoardLetter from "../../App/Components/KeyBoardLetter";
import KeyBoardLetterSpecial from "../../App/Components/KeyBoardLetterDelete";
import KeyBoardLetterEnter from "../../App/Components/KeyBoardLetterEnter";

export default function KeyBoardEn() {
  return (
    <Box
      flexDirection={"column"}
      margin={"auto"}
      width={"100%"}
      maxWidth={"484px"}
    >
      <Box display={"flex"} justifyContent={"space-evenly"} width={"100%"}>
        <KeyBoardLetter letter="q" />
        <KeyBoardLetter letter="w" />
        <KeyBoardLetter letter="e" />
        <KeyBoardLetter letter="r" />
        <KeyBoardLetter letter="t" />
        <KeyBoardLetter letter="y" />
        <KeyBoardLetter letter="u" />
        <KeyBoardLetter letter="i" />
        <KeyBoardLetter letter="o" />
        <KeyBoardLetter letter="p" />
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <KeyBoardLetter letter="a" />
        <KeyBoardLetter letter="s" />
        <KeyBoardLetter letter="d" />
        <KeyBoardLetter letter="f" />
        <KeyBoardLetter letter="g" />
        <KeyBoardLetter letter="h" />
        <KeyBoardLetter letter="j" />
        <KeyBoardLetter letter="k" />
        <KeyBoardLetter letter="l" />
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <KeyBoardLetterEnter />
        <KeyBoardLetter letter="z" />
        <KeyBoardLetter letter="x" />
        <KeyBoardLetter letter="c" />
        <KeyBoardLetter letter="v" />
        <KeyBoardLetter letter="b" />
        <KeyBoardLetter letter="n" />
        <KeyBoardLetter letter="m" />
        <KeyBoardLetterSpecial />
      </Box>
    </Box>
  );
}
