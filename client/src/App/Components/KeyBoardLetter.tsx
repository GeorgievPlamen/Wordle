import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { addLetter } from "../../Features/Keyboard/wordSlice";
import { useEffect, useState } from "react";

interface Props {
  letter: string;
}
export default function KeyBoardLetter({ letter }: Props) {
  const { letters } = useAppSelector((state) => state.letters);
  const [letterValue, setLetterValue] = useState(letters[letter].value);
  const [backgroundColor, setBackgroundColor] = useState("");
  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLetterValue(letterValue - letterValue + letters[letter].value);
    if (letterValue === 2) {
      handleBackgroundColorChange("#787c7e");
    }
    if (letterValue === 1) {
      handleBackgroundColorChange("#c9b458");
    }
    if (letterValue === 0) {
      handleBackgroundColorChange("#6aaa64");
    }
  }, [letter, letterValue, letters]);
  return (
    <Box>
      <Button
        onClick={() => dispatch(addLetter(letter))}
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
          minWidth: "27.5px",
          minHeight: "46px",
          width: "8vw",
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
