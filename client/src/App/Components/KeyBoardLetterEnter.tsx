import { Box, Button, Typography } from "@mui/material";

export default function KeyBoardLetterEnter() {
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
