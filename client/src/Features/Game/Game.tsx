import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import TestGetWord from "../../App/Components/TestGetWord";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import KeyBoardEn from "../Keyboard/KeyBoardEn";
import LettersGrid from "../LettersGrid/LettersGrid";
import Navbar from "../../App/Layout/Navbar";
import agent from "../../App/api/agent";
import { addStats } from "../Statistics/statisticsSlice";
import { Cookies } from "react-cookie";
import KeyBoardBg from "../Keyboard/KeyBoardBg";
import { init } from "./wordSlice";
import { stringToNumberArray } from "../../App/helper/helper";

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

interface Word {
  letters: string;
  completed: boolean;
  values: number[];
}

export default function Game() {
  const game = useAppSelector((state) => state.game);
  const [loading, SetLoading] = useState(false);
  const word = useAppSelector((state) => state.word);
  const wordCompleted = word.completed;
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const userId = cookies.get("userId");
  console.log(loading);

  useEffect(() => {
    async function initUser() {
      try {
        SetLoading(true);
        await agent.Guesses.userAttemptsToday(userId).then((data) => {
          console.log(data);

          const currentWordEn: number = data["attempt"];
          const currentWordBg: number = data["attemptBg"];

          const wordsEn: Word[] = [];
          const wordsBg: Word[] = [];

          prepEnGuesses(data, wordsEn);
          prepBgGuesses(data, wordsBg);

          dispatch(
            init({
              attemptEn: currentWordEn,
              attemptBg: currentWordBg,
              wordsEn,
              wordsBg,
            })
          );
          SetLoading(false);
        });
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    }
    initUser();
  }, [dispatch, userId]);

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

    if (wordCompleted === true) {
      fetch();
      setTimeout(() => {
        alert("Splendid!");
      }, 2000);
    }
  }, [dispatch, wordCompleted, userId]);
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
        {game.bulgarian ? <KeyBoardBg /> : <KeyBoardEn />}
        <TestGetWord />
      </Box>
    </>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function prepEnGuesses(data: any, wordsEn: Word[]) {
  if (data["firstGuess"] != null) {
    const guess: string = data["firstGuess"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsEn.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["secondGuess"] != null) {
    const guess: string = data["secondGuess"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsEn.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["thirdGuess"] != null) {
    const guess: string = data["thirdGuess"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsEn.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["fourthGuess"] != null) {
    const guess: string = data["fourthGuess"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsEn.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["fifthGuess"] != null) {
    const guess: string = data["fifthGuess"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsEn.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["sixthGuess"] != null) {
    const guess: string = data["sixthGuess"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsEn.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function prepBgGuesses(data: any, wordsBg: Word[]) {
  if (data["firstGuessBg"] != null) {
    const guess: string = data["firstGuessBg"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsBg.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["secondGuessBg"] != null) {
    const guess: string = data["secondGuessBg"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsBg.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["thirdGuessBg"] != null) {
    const guess: string = data["thirdGuessBg"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsBg.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["fourthGuesBgs"] != null) {
    const guess: string = data["fourthGuessBg"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsBg.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["fifthGuessBg"] != null) {
    const guess: string = data["fifthGuessBg"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsBg.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }

  if (data["sixthGuessBg"] != null) {
    const guess: string = data["sixthGuessBg"];
    const splittedGuess = guess.split(",");
    const wordLetters = splittedGuess[0];
    const wordValues = stringToNumberArray(splittedGuess[1]);

    wordsBg.push({
      letters: wordLetters,
      completed: true,
      values: wordValues,
    });
  }
}
