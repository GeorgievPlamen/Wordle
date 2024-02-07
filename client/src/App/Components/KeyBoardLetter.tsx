import { Box, Button, Typography } from "@mui/material";

interface Props {
  letter: string;
}
export default function KeyBoardLetter({ letter }: Props) {
  return (
    <Box width={"100%"} height={"100%"}>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "#c3c6ca",
          },
          "&:active": {
            color: "#555",
          },
          minWidth: "27.5px",
          minHeight: "46px",
          width: "inherit",
          height: "100%",
          maxWidth: "43px",
          maxHeight: "58px",
        }}
        variant={"contained"}
        color="secondary"
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {letter}
        </Typography>
      </Button>
    </Box>
  );
}
