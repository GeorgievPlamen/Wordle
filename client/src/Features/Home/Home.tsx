import { Box, Button, Typography } from "@mui/material";
import logo from "/wordle-icon.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import { toggleDisplay } from "../HowToPlay/howToPlaySlice";
import { logOut } from "../Account/accountSlice";

export default function Home() {
  const game = useAppSelector((state) => state.game.bulgarian);
  const user = useAppSelector((state) => state.account.user);
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
          height: "100vh",
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
            {game
              ? "Получи 6 шанса за да познаеш дума от 5 букви"
              : "Get 6 chances to guess a 5-letter word."}
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
            {game ? "Играй" : "Play"}
          </Button>
          {user === null ? (
            <Button
              onClick={() => nav("/login")}
              color="secondary"
              variant="outlined"
              sx={{
                margin: "10px",
                width: "130px",
                borderRadius: "50px",
                borderColor: "#656565",
              }}
            >
              <Typography color={"textPrimary"} fontSize={"15px"}>
                {game ? "Влез" : "Log in"}
              </Typography>
            </Button>
          ) : (
            <Button
              onClick={() => dispatch(logOut())}
              color="secondary"
              variant="outlined"
              sx={{
                margin: "10px",
                width: "130px",
                borderRadius: "50px",
                borderColor: "#656565",
              }}
            >
              <Typography color={"textPrimary"} fontSize={"15px"}>
                {game ? "Излез" : "Log out"}
              </Typography>
            </Button>
          )}
          <Button
            onClick={() => dispatch(toggleDisplay())}
            color="secondary"
            variant="outlined"
            sx={{
              margin: "10px",
              width: "130px",
              borderRadius: "50px",
              borderColor: "#656565",
            }}
          >
            <Typography color={"textPrimary"} fontSize={"15px"}>
              {game ? "Как се играе" : "How To Play"}
            </Typography>
          </Button>
        </Box>
        <Box justifySelf={"end"}>
          <Typography variant="h6">
            {game ? "Направено от Пламен Георгиев" : "Made by Plamen Georgiev"}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
