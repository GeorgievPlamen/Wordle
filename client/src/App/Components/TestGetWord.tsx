import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import agent from "../api/agent";

export default function TestGetWord() {
  const [enWord, setEnWord] = useState("");

  const handleGetWord = async () => {
    await agent.Word.enWord().then((data) => setEnWord(data));
  };

  const handleCheckWord = async () => {
    await agent.Word.checkEnWord(enWord).then((data) => console.log(data));
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
      <Button onClick={handleCheckWord}>Check Word</Button>
    </Box>
  );
}
