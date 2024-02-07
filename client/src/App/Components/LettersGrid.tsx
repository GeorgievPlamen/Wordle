import { Box } from "@mui/material";
import LettersRow from "./LettersRow";

export default function LettersGrid() {
  return (
    <Box
      margin={"10px auto"}
      padding={"10px"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"5px"}
      maxHeight={{ xs: "500px" }}
    >
      <LettersRow first="p" second="a" third="r" fourth="t" fifth="y" />
      <LettersRow />
      <LettersRow />
      <LettersRow />
      <LettersRow />
      <LettersRow />
    </Box>
  );
}
