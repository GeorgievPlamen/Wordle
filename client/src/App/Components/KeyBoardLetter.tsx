import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { addLetter, addLetterBg } from "../../Features/Game/wordSlice";
import { useEffect, useState } from "react";

interface Props {
  letter: string;
}
export default function KeyBoardLetter({ letter }: Props) {
  const game = useAppSelector((state) => state.game.bulgarian);
  const { completed, completedBg } = useAppSelector((state) => state.word);
  const letterWidth = game ? "7vw" : "8vw";
  const { letters, lettersBg } = useAppSelector((state) => state.letters);
  const [letterValue, setLetterValue] = useState(
    game ? lettersBg[letter].value : letters[letter].value
  );
  const [backgroundColor, setBackgroundColor] = useState("");
  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLetterValue(
      letterValue -
        letterValue +
        (game ? lettersBg[letter].value : letters[letter].value)
    );
    if (letterValue === 2) {
      handleBackgroundColorChange("#787c7e");
    }
    if (letterValue === 1) {
      handleBackgroundColorChange("#c9b458");
    }
    if (letterValue === 0) {
      handleBackgroundColorChange("#6aaa64");
    }
  }, [game, letter, letterValue, letters, lettersBg]);
  return (
    <Box>
      <Button
        onClick={() => {
          console.log(game + " bg " + completedBg);
          console.log(game + " en " + completed);
          if (game && completedBg || !game && completed) {
            return;
          } else {
            dispatch(game ? addLetterBg(letter) : addLetter(letter));
          }
        }}
        sx={{
          "&:hover": {
            backgroundColor: "#c3c6ca",
          },
          "&:active": {
            color: "#555",
          },
          backgroundColor,
          margin: "10px 2px",
          padding: "0px",
          minWidth: "20.5px",
          minHeight: "46px",
          width: letterWidth,
          height: "100%",
          maxWidth: "43px",
          maxHeight: "58px",
        }}
        variant={"contained"}
        color="secondary"
      >
        <Typography padding={"0px"} variant="h5" sx={{ fontWeight: "bold" }}>
          {letter}
        </Typography>
      </Button>
    </Box>
  );
}
