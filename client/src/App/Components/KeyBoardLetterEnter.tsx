import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import agent from "../api/agent";
import { completeWord, completeWordBg } from "../../Features/Game/wordSlice";
import { addValue, addValueBg } from "../../Features/LettersGrid/lettersSlice";

interface Props {
  letters: string[];
  values: number[];
}

export default function KeyBoardLetterEnter() {
  const currenWordEn = useAppSelector((state) => state.word.currentWordEn);
  const currenWordBg = useAppSelector((state) => state.word.currentWordBg);
  const wordsEn = useAppSelector((state) => state.word.words);
  const wordsBg = useAppSelector((state) => state.word.wordsBg);
  const game = useAppSelector((state) => state.game);
  const words = game.bulgarian ? wordsBg : wordsEn;
  const dispatch = useAppDispatch();

  const handleWordInput = async () => {
    if (words[currenWordEn].letters.length === 5 && currenWordEn < 5) {
      try {
        await agent.Word.checkEnWord(words[currenWordEn].letters).then(
          async (data: Props) => {
            for (let i = 0; i < 5; i++) {
              //loop trough all letters and add values with dispatch
              dispatch(
                addValue({
                  letter: data.letters[i],
                  letterValue: data.values[i],
                })
              );
            }
            dispatch(completeWord({ values: data.values }));
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleWordInputBg = async () => {
    if (words[currenWordBg].letters.length === 5 && currenWordBg < 5) {
      try {
        await agent.Word.checkBgWord(words[currenWordBg].letters).then(
          async (data: Props) => {
            for (let i = 0; i < 5; i++) {
              //loop trough all letters and add values with dispatch
              dispatch(
                addValueBg({
                  letter: data.letters[i],
                  letterValue: data.values[i],
                })
              );
            }
            dispatch(completeWordBg({ values: data.values }));
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box>
      <Button
        onClick={game.bulgarian ? handleWordInputBg : handleWordInput}
        sx={{
          "&:hover": {
            backgroundColor: "#c3c6ca",
          },
          "&:active": {
            color: "#555",
          },
          margin: "10px 2px",
          padding: "0px",
          minWidth: "30.5px",
          minHeight: "55px",
          width: "10vh",
          height: "12vh",
          maxWidth: "66px",
          maxHeight: "58px",
        }}
        variant={"contained"}
        color="secondary"
      >
        <Typography sx={{ fontWeight: "bolder" }}>ENTER</Typography>
      </Button>
    </Box>
  );
}
