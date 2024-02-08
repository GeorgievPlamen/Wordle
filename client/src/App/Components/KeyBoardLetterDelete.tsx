import { Box, Button, Icon } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useAppDispatch } from "../Store/configureStore";
import { removeLetter } from "../../Features/Keyboard/wordSlice";

export default function KeyBoardLetterDelete() {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Button
        onClick={() => dispatch(removeLetter())}
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
