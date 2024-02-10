import { Box } from "@mui/material";
import LettersRow from "../../App/Components/LettersRow";
import { useAppSelector } from "../../App/Store/configureStore";

export default function LettersGrid() {
  const { words } = useAppSelector((state) => state.word);
  return (
    <Box
      margin={"10px auto"}
      padding={"10px"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"5px"}
      maxHeight={{ xs: "500px" }}
    >
      <LettersRow
        first={words[0].letters[0]}
        second={words[0].letters[1]}
        third={words[0].letters[2]}
        fourth={words[0].letters[3]}
        fifth={words[0].letters[4]}
      />
      <LettersRow
        first={words[1].letters[0]}
        second={words[1].letters[1]}
        third={words[1].letters[2]}
        fourth={words[1].letters[3]}
        fifth={words[1].letters[4]}
      />
      <LettersRow
        first={words[2].letters[0]}
        second={words[2].letters[1]}
        third={words[2].letters[2]}
        fourth={words[2].letters[3]}
        fifth={words[2].letters[4]}
      />
      <LettersRow
        first={words[3].letters[0]}
        second={words[3].letters[1]}
        third={words[3].letters[2]}
        fourth={words[3].letters[3]}
        fifth={words[3].letters[4]}
      />
      <LettersRow
        first={words[4].letters[0]}
        second={words[4].letters[1]}
        third={words[4].letters[2]}
        fourth={words[4].letters[3]}
        fifth={words[4].letters[4]}
      />
      <LettersRow
        first={words[5].letters[0]}
        second={words[5].letters[1]}
        third={words[5].letters[2]}
        fourth={words[5].letters[3]}
        fifth={words[5].letters[4]}
      />
    </Box>
  );
}
