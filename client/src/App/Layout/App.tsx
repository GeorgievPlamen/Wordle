import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import HowToPlay from "../../Features/HowToPlay/HowToPlay";
import Statistics from "../../Features/Statistics/Statistics";
import "../../styles.css";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { useEffect, useState } from "react";
import {
  fetchCurrentUser,
  setUsername,
} from "../../Features/Account/accountSlice";
import { init } from "../../Features/Game/wordSlice";
import agent from "../api/agent";
import { stringToNumberArray } from "../helper/helper";
import { Cookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { toggleLoading } from "../../Features/Game/gameSlice";

interface Word {
  letters: string;
  completed: boolean;
  values: number[];
}

function App() {
  const [userId, setUserId] = useState("");
  const darkMode = useAppSelector((state) => state.game.darkMode);
  const account = useAppSelector((state) => state.account.username);
  const dispatch = useAppDispatch();
  const colorMode = darkMode ? "dark" : "light";
  const cookies = new Cookies();
  const cookiesId = cookies.get("userId");

  if (localStorage["user"]) {
    const user = JSON.parse(localStorage["user"]);
    dispatch(setUsername(user["username"]));
  } else if (cookiesId != undefined) {
    dispatch(setUsername(cookiesId));
  }

  useEffect(() => {
    dispatch(fetchCurrentUser());
    async function initUser() {
      if (account != null) {
        setUserId(account);
      } else {
        return;
      }

      try {
        dispatch(toggleLoading());
        if (userId.length <= 0) {
          return;
        }
        await agent.Guesses.userAttemptsToday(userId).then((data) => {
          const currentWordEn: number = data["attempt"];
          const currentWordBg: number = data["attemptBg"];

          const completedEn: boolean = data["completed"];
          const completedBg: boolean = data["completedBg"];

          const wordsEn: Word[] = [];
          const wordsBg: Word[] = [];

          prepEnGuesses(data, wordsEn);
          prepBgGuesses(data, wordsBg);

          dispatch(
            init({
              todayCompletedEn: completedEn,
              todayCompletedBg: completedBg,
              attemptEn: currentWordEn,
              attemptBg: currentWordBg,
              wordsEn,
              wordsBg,
            })
          );
          dispatch(toggleLoading());
        });
      } catch (error) {
        dispatch(toggleLoading());
      }
    }
    initUser();
  }, [account, dispatch, userId]);

  const theme = createTheme({
    palette: {
      mode: colorMode,
      background: {
        default: colorMode === "light" ? "#f8f8f8" : "#121213",
        // #3a3d40
      },
      primary: {
        main: colorMode === "light" ? "#fdfdfd" : "#f8f8f8",
        contrastText: "#f0f0f0",
      },
      secondary: {
        main: colorMode === "light" ? "#d3d6da" : "#a3a6aa",
        light: "#fff",
        contrastText: "#000",
      },
      text: {
        primary: colorMode === "light" ? "#121213" : "#f8f8f8",
        secondary: "#fdfdfd",
      },
      action: {
        active: colorMode === "light" ? "#121213" : "#f8f8f8",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: "23px",
            minHeight: "58px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        limit={10}
        position="top-center"
        hideProgressBar
        theme="colored"
        autoClose={500}
      />
      <CssBaseline enableColorScheme />
      <>
        <Statistics />
        <HowToPlay />
        <Outlet />
      </>
    </ThemeProvider>
  );
}

export default App;

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
