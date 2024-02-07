import { Box, Typography } from "@mui/material";

interface Props {
  letter?: string;
}

export default function LetterContainer({ letter }: Props) {
  return (
    <Box
      sx={{ backgroundColor: "#whitesmoke" }}
      height={"10vh"}
      width={"10vh"}
      minHeight={"52px"}
      minWidth={"52px"}
      maxHeight={"62px"}
      maxWidth={"62px"}
      display={"flex"}
      border={"2px solid #878a8c"}
    >
      <Typography variant="h3" margin={"auto"} color={"textPrimary"}>
        {letter?.toUpperCase()}
      </Typography>
    </Box>
  );
}
