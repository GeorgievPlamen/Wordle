import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useAppSelector } from "../Store/configureStore";

interface Props {
  letter?: string;
  letterValue?: number;
}

export default function LetterContainer({ letter, letterValue }: Props) {
  const [backgroundColor, setBackgroundColor] = useState("");
  const game = useAppSelector((state) => state.game.bulgarian);
  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
  };
  useEffect(() => {
    if (letterValue === undefined) {
      handleBackgroundColorChange("#");
    }
    if (letterValue === 2) {
      handleBackgroundColorChange("#787c7e");
    }
    if (letterValue === 1) {
      handleBackgroundColorChange("#c9b458");
    }
    if (letterValue === 0) {
      handleBackgroundColorChange("#6aaa64");
    }
  }, [game, letterValue]);

  return (
    <Box
      sx={{ backgroundColor }}
      height={"8vh"}
      width={"8vh"}
      minHeight={"42px"}
      minWidth={"42px"}
      maxHeight={"62px"}
      maxWidth={"62px"}
      display={"flex"}
      border={"2px solid #878a8c"}
    >
      <Typography
        variant="h3"
        margin={"auto"}
        color={"textPrimary"}
        sx={{ fontSize: { xs: "2em", md: "3em" }, fontWeight: "bold" }}
      >
        {letter?.toUpperCase()}
      </Typography>
    </Box>
  );
}
