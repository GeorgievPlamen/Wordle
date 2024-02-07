import { Box } from "@mui/material";
import KeyBoardLetter from "./KeyBoardLetter";
import KeyBoardLetterSpecial from "./KeyBoardLetterSpecial";

export default function KeyBoardEn() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"5px"}
      maxHeight={"200px"}
      maxWidth={"484px"}
      width={"80vw"}
      height={"100vh"}
    >
      <Box
        display={"flex"}
        width={"100%"}
        gap={"5px"}
        justifyContent={"space-evenly"}
      >
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
      <Box display={"flex"} gap={"5px"} justifyContent={"space-evenly"}>
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
      <Box display={"flex"} gap={"5px"} justifyContent={"space-evenly"}>
        <KeyBoardLetterSpecial enter="enter" />
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
