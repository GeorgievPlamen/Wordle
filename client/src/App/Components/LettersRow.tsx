import { Box } from "@mui/material";
import LetterContainer from "./LetterContainer";

interface Props {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
  firstValue?: number;
  secondValue?: number;
  thirdValue?: number;
  fourthValue?: number;
  fifthValue?: number;
}

export default function LettersRow({
  first,
  second,
  third,
  fourth,
  fifth,
  firstValue,
  secondValue,
  thirdValue,
  fourthValue,
  fifthValue,
}: Props) {
  return (
    <Box
      display={"flex"}
      gap={"5px"}
      justifyContent={"space-evenly"}
      width={"100vw"}
      maxWidth={"320px"}
    >
      <LetterContainer letter={first} letterValue={firstValue} />
      <LetterContainer letter={second} letterValue={secondValue} />
      <LetterContainer letter={third} letterValue={thirdValue} />
      <LetterContainer letter={fourth} letterValue={fourthValue} />
      <LetterContainer letter={fifth} letterValue={fifthValue} />
    </Box>
  );
}
