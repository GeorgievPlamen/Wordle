import { Box, Typography } from "@mui/material";

interface Props {
  letter?: string;
}

export default function LetterContainer({ letter }: Props) {
  return (
    <Box
      sx={{ backgroundColor: "#whitesmoke" }}
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
