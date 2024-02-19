import { Box } from "@mui/material";
import LettersRow from "../../App/Components/LettersRow";
import { useAppSelector } from "../../App/Store/configureStore";

export default function LettersGrid() {
  const game = useAppSelector((state) => state.game.bulgarian);
  const  wordsEn  = useAppSelector((state) => state.word.words);
  const { wordsBg } = useAppSelector((state) => state.word);
  const words = game ? wordsBg : wordsEn;
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
        firstValue={words[0].values[0]}
        secondValue={words[0].values[1]}
        thirdValue={words[0].values[2]}
        fourthValue={words[0].values[3]}
        fifthValue={words[0].values[4]}
      />
      <LettersRow
        first={words[1].letters[0]}
        second={words[1].letters[1]}
        third={words[1].letters[2]}
        fourth={words[1].letters[3]}
        fifth={words[1].letters[4]}
        firstValue={words[1].values[0]}
        secondValue={words[1].values[1]}
        thirdValue={words[1].values[2]}
        fourthValue={words[1].values[3]}
        fifthValue={words[1].values[4]}
      />
      <LettersRow
        first={words[2].letters[0]}
        second={words[2].letters[1]}
        third={words[2].letters[2]}
        fourth={words[2].letters[3]}
        fifth={words[2].letters[4]}
        firstValue={words[2].values[0]}
        secondValue={words[2].values[1]}
        thirdValue={words[2].values[2]}
        fourthValue={words[2].values[3]}
        fifthValue={words[2].values[4]}
      />
      <LettersRow
        first={words[3].letters[0]}
        second={words[3].letters[1]}
        third={words[3].letters[2]}
        fourth={words[3].letters[3]}
        fifth={words[3].letters[4]}
        firstValue={words[3].values[0]}
        secondValue={words[3].values[1]}
        thirdValue={words[3].values[2]}
        fourthValue={words[3].values[3]}
        fifthValue={words[3].values[4]}
      />
      <LettersRow
        first={words[4].letters[0]}
        second={words[4].letters[1]}
        third={words[4].letters[2]}
        fourth={words[4].letters[3]}
        fifth={words[4].letters[4]}
        firstValue={words[4].values[0]}
        secondValue={words[4].values[1]}
        thirdValue={words[4].values[2]}
        fourthValue={words[4].values[3]}
        fifthValue={words[4].values[4]}
      />
      <LettersRow
        first={words[5].letters[0]}
        second={words[5].letters[1]}
        third={words[5].letters[2]}
        fourth={words[5].letters[3]}
        fifth={words[5].letters[4]}
        firstValue={words[5].values[0]}
        secondValue={words[5].values[1]}
        thirdValue={words[5].values[2]}
        fourthValue={words[5].values[3]}
        fifthValue={words[5].values[4]}
      />
    </Box>
  );
}
