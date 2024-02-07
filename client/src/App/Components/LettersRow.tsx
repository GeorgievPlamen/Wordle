import { Box } from "@mui/material";
import LetterContainer from "./LetterContainer";

interface Props {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
}

export default function LettersRow({
  first,
  second,
  third,
  fourth,
  fifth,
}: Props) {
  return (
    <Box
      display={"flex"}
      gap={"5px"}
      justifyContent={"space-evenly"}
      width={"100vw"}
      maxWidth={"320px"}
    >
      <LetterContainer letter={first} />
      <LetterContainer letter={second} />
      <LetterContainer letter={third} />
      <LetterContainer letter={fourth} />
      <LetterContainer letter={fifth} />
    </Box>
  );
}
