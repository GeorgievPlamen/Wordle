import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import agent from "../api/agent";
import { Cookies } from "react-cookie";

export default function TestGetWord() {
  const [enWord, setEnWord] = useState("");
  const [bgWord, setBgWord] = useState("");
  const cookies = new Cookies();

  const handleGetWord = async () => {
    await agent.Word.enWord().then((data) => setEnWord(data));
  };
  const handleGetWordBg = async () => {
    await agent.Word.bgWord().then((data) => setBgWord(data));
  };

  const handleGetUserAttempts = async () => {
    await agent.Guesses.userGuesses(cookies.get("userId"));
  };

  return (
    <Box
      height={"100px"}
      width={"150px"}
      display={"flex"}
      sx={{ flexDirection: "column" }}
    >
      <Typography variant="h5" margin={"auto"}>
        {enWord}
      </Typography>
      <Button onClick={handleGetWord}>
        <Typography color={"textPrimary"}>Get Word</Typography>
      </Button>
      <Typography variant="h5" margin={"auto"}>
        {bgWord}
      </Typography>
      <Button onClick={handleGetWordBg}>
        <Typography color={"textPrimary"}>Get Word Bg</Typography>
      </Button>
      <Button onClick={handleGetUserAttempts}>
        <Typography color={"textPrimary"}>Get User Attempts</Typography>
      </Button>
    </Box>
  );
}
