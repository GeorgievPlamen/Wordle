import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import agent from "../api/agent";
import { completeWord } from "../../Features/Keyboard/wordSlice";
import { useState } from "react";
import { addValue } from "../../Features/LettersGrid/lettersSlice";

interface Props {
  letters: string[];
  values: number[];
}

export default function KeyBoardLetterEnter() {
  const { words } = useAppSelector((state) => state.word);
  const [currentWord, setCurrentWord] = useState(0);
  const dispatch = useAppDispatch();

  const handleWordInput = async () => {
    if (words[currentWord].letters.length === 5 && currentWord < 5) {
      try {
        await agent.Word.checkEnWord(words[currentWord].letters).then(
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
            setCurrentWord(currentWord + 1);
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
        onClick={handleWordInput}
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
