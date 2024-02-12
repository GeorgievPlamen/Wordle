import { Box, Button, Typography } from "@mui/material";
import logo from "/public/wordle-icon.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../App/Store/configureStore";
import { toggleDisplay } from "../../App/Components/howToPlaySlice";

export default function Home() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: { xs: "356px", sm: "450px", md: "600px" },
          height: "650px",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          sx={{
            marginBottom: "10px",
            width: { xs: "124px", sx: "150px", md: "160px" },
          }}
        >
          <img src={logo} width={"50%"} />
          <Typography
            fontWeight={"bolder"}
            variant="h3"
            alignSelf={"center"}
            textAlign={"center"}
          >
            Wordle
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "10px",
          }}
        >
          <Typography align="center" variant="h4">
            Get 6 chances to guess a 5-letter word.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          sx={{
            marginBottom: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            onClick={() => nav("/game")}
            color="secondary"
            variant="contained"
            sx={{
              margin: "10px",
              width: "130px",
              borderRadius: "50px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Play
          </Button>
          <Button
            variant="outlined"
            sx={{ margin: "10px", width: "130px", borderRadius: "50px" }}
          >
            Log in
          </Button>
          <Button
            onClick={() => dispatch(toggleDisplay())}
            variant="outlined"
            sx={{ margin: "10px", width: "130px", borderRadius: "50px" }}
          >
            How to play
          </Button>
        </Box>
        <Box justifySelf={"end"}>
          <Typography variant="h6">Made by Plamen Georgiev</Typography>
        </Box>
      </Box>
    </>
  );
}
