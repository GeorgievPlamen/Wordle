import { Box } from "@mui/material";
import { useEffect } from "react";
import TestGetWord from "../../App/Components/TestGetWord";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import KeyBoardEn from "../Keyboard/KeyBoardEn";
import LettersGrid from "../LettersGrid/LettersGrid";
import Navbar from "../../App/Layout/Navbar";
import agent from "../../App/api/agent";
import { addStats } from "../Statistics/statisticsSlice";
import { Cookies } from "react-cookie";

interface GuessesProps {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  sixth: number;
  firstBg: number;
  secondBg: number;
  thirdBg: number;
  fourthBg: number;
  fifthBg: number;
  sixthBg: number;
  failedEn: number;
  failedBg: number;
}

export default function Game() {
  const words = useAppSelector((state) => state.word);
  const game = words.completed;
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const userId = cookies.get("userId");

  useEffect(() => {
    async function fetch() {
      try {
        await agent.Guesses.userGuesses(userId).then((data: GuessesProps) => {
          dispatch(
            addStats({
              first: data.first,
              second: data.second,
              third: data.third,
              fourth: data.fourth,
              fifth: data.fifth,
              sixth: data.sixth,
              firstBg: data.firstBg,
              secondBg: data.secondBg,
              thirdBg: data.thirdBg,
              fourthBg: data.fourthBg,
              fifthBg: data.fifthBg,
              sixthBg: data.sixthBg,
              failedEn: data.failedEn,
              failedBg: data.failedBg,
            })
          );
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (game === true) {
      fetch();
      setTimeout(() => {
        alert("Splendid!");
      }, 2000);
    }
  }, [dispatch, game, userId]);
  return (
    <>
      <Navbar />
      <Box
        display={"flex"}
        margin={"60px auto"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <LettersGrid />
        <KeyBoardEn />
        <TestGetWord />
      </Box>
    </>
  );
}
