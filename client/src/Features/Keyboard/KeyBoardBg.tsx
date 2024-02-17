import { Box } from "@mui/material";
import KeyBoardLetter from "../../App/Components/KeyBoardLetter";
import KeyBoardLetterSpecial from "../../App/Components/KeyBoardLetterDelete";
import KeyBoardLetterEnter from "../../App/Components/KeyBoardLetterEnter";

export default function KeyBoardBg() {
  return (
    <Box
      flexDirection={"column"}
      margin={"auto"}
      width={"100%"}
      maxWidth={"484px"}
    >
      <Box display={"flex"} justifyContent={"space-evenly"} width={"100%"}>
        <KeyBoardLetter letter="я" />
        <KeyBoardLetter letter="в" />
        <KeyBoardLetter letter="е" />
        <KeyBoardLetter letter="р" />
        <KeyBoardLetter letter="т" />
        <KeyBoardLetter letter="ъ" />
        <KeyBoardLetter letter="у" />
        <KeyBoardLetter letter="и" />
        <KeyBoardLetter letter="о" />
        <KeyBoardLetter letter="п" />
        <KeyBoardLetter letter="ю" />
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <KeyBoardLetter letter="а" />
        <KeyBoardLetter letter="с" />
        <KeyBoardLetter letter="д" />
        <KeyBoardLetter letter="ф" />
        <KeyBoardLetter letter="г" />
        <KeyBoardLetter letter="х" />
        <KeyBoardLetter letter="й" />
        <KeyBoardLetter letter="к" />
        <KeyBoardLetter letter="л" />
        <KeyBoardLetter letter="ш" />
        <KeyBoardLetter letter="щ" />
      </Box>
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <KeyBoardLetterEnter />
        <KeyBoardLetter letter="з" />
        <KeyBoardLetter letter="ь" />
        <KeyBoardLetter letter="ц" />
        <KeyBoardLetter letter="ж" />
        <KeyBoardLetter letter="б" />
        <KeyBoardLetter letter="н" />
        <KeyBoardLetter letter="м" />
        <KeyBoardLetter letter="ч" />
        <KeyBoardLetterSpecial />
      </Box>
    </Box>
  );
}
