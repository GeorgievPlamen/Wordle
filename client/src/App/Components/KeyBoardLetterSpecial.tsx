import { Box, Button, Icon, Typography } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

interface Props {
  enter?: string;
}

export default function KeyBoardLetterSpecial({ enter }: Props) {
  return (
    <Box>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "#c3c6ca",
          },
          "&:active": {
            color: "#555",
          },
          minWidth: "37.5px",
          minHeight: "55px",
          width: "10vh",
          height: "12vh",
          maxWidth: "66px",
          maxHeight: "58px",
        }}
        variant={"contained"}
        color="secondary"
      >
        {!enter && <Icon component={BackspaceIcon} />}
        {enter && (
          <Typography sx={{ fontWeight: "bolder" }}>{enter}</Typography>
        )}
      </Button>
    </Box>
  );
}
