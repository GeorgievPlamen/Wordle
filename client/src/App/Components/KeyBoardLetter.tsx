import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch } from "../Store/configureStore";
import { addLetter } from "../../Features/Keyboard/wordSlice";

interface Props {
  letter: string;
}
export default function KeyBoardLetter({ letter }: Props) {
  const dispatch = useAppDispatch();
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
