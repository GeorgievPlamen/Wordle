import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Navbar from "../../App/Layout/Navbar";
import { useAppSelector } from "../../App/Store/configureStore";

export default function Register() {
  const languageBg = useAppSelector((state) => state.game.bulgarian);
  return (
    <Box
      display={"flex"}
      margin={"60px auto"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Navbar />
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 360,
          position: "absolute",
          zIndex: "999",
          left: "50%",
          marginLeft: { xs: "-180px" },
          top: "10vh",
        }}
      >
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" fontWeight={"bold"} sx={{}}>
            {languageBg ? "Регистрация" : "Register"}
          </Typography>
        </CardActions>
        <CardContent>
          <Typography variant="h6" component="div">
            {languageBg
              ? "Познай думата с 6 опита."
              : "Guess the Wordle in 6 tries."}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
