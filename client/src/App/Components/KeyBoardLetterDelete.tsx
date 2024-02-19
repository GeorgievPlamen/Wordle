import { Box, Button, Icon } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { removeLetter, removeLetterBg } from "../../Features/Game/wordSlice";

export default function KeyBoardLetterDelete() {
  const game = useAppSelector((state) => state.game.bulgarian);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Button
        onClick={() =>
          dispatch(game ? removeLetterBg() : removeLetter())
        }
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
        <Icon component={BackspaceIcon} />
      </Button>
    </Box>
  );
}
