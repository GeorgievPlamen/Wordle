import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import agent from "../api/agent";
import { Cookies } from "react-cookie";

export default function TestGetWord() {
  const [enWord, setEnWord] = useState("");
  const cookies = new Cookies();

  const handleGetWord = async () => {
    await agent.Word.enWord().then((data) => setEnWord(data));
  };

  const handleGetUserAttempts = async () => {
    await agent.Guesses.userGuesses(cookies.get("userId")).then((data) =>
      console.log(data)
    );
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
      <Button onClick={handleGetWord}>Get Word</Button>
      <Button onClick={handleGetUserAttempts}>Get Word</Button>
    </Box>
  );
}
