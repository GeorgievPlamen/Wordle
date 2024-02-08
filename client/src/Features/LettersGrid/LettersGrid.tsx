import { Box } from "@mui/material";
import LettersRow from "../../App/Components/LettersRow";
import { useSelector } from "react-redux";
import { LetterState } from "../Keyboard/letterReducer";

export default function LettersGrid() {
  const data = useSelector((state: LetterState) => state.data);
  return (
    <Box
      margin={"10px auto"}
      padding={"10px"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"5px"}
      maxHeight={{ xs: "500px" }}
    >
      <LettersRow />
      <LettersRow
        first={data[0]}
        second={data[1]}
        third={data[2]}
        fourth={data[3]}
        fifth={data[4]}
      />
      <LettersRow first="p" second="a" third="r" fourth="t" fifth="y" />
      <LettersRow />
      <LettersRow />
      <LettersRow />
    </Box>
  );
}
