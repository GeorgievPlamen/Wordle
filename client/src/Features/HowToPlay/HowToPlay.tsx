import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Icon,
  Typography,
} from "@mui/material";

import close from "@mui/icons-material/Close";
import LettersRow from "../../App/Components/LettersRow";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import { toggleDisplay } from "./howToPlaySlice";

export default function HowToPlay() {
  const howToPlay = useAppSelector((state) => state.howToPlay);
  const open = howToPlay.display === "block" ? true : false;
  const languageBg = useAppSelector((state) => state.game.bulgarian);
  const dispatch = useAppDispatch();
  return (
    <Backdrop open={open} sx={{ zIndex: "999" }}>
      <Card
        sx={{
          display: howToPlay.display,
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
            {languageBg ? "Как Се Играе" : "How To Play"}
          </Typography>
          <Button
            onClick={() => dispatch(toggleDisplay())}
            sx={{ justifySelf: "flex-end", width: "40px" }}
          >
            <Icon color="action" component={close} />
          </Button>
        </CardActions>
        <CardContent>
          <Typography variant="h6" component="div">
            {languageBg
              ? "Познай думата с 6 опита."
              : "Guess the Wordle in 6 tries."}
          </Typography>
          <Box>
            <ul>
              <li>
                {languageBg
                  ? "Всяко предположение трябва да е валидна дума с пет букви."
                  : "Each guess must be a valid 5-letter word."}
              </li>
              <li>
                {languageBg
                  ? "Цветът на плочките ще се промени, за да покаже колко близо е вашето предположение до думата."
                  : "The color of the tiles will change to show how close your guess was to the word."}
              </li>
            </ul>
          </Box>
          <Typography fontWeight={"bold"}>
            {languageBg ? "Примери" : "Examples"}
          </Typography>
          <Box>
            <LettersRow
              first={languageBg ? "Я" : "W"}
              second={languageBg ? "Г" : "E"}
              third={languageBg ? "О" : "A"}
              fourth={languageBg ? "Д" : "R"}
              fifth={languageBg ? "А" : "Y"}
              firstValue={0}
            />
            <Typography>
              <span style={{ fontWeight: "bold" }}>
                {languageBg ? "Я" : "W"}
              </span>{" "}
              {languageBg
                ? "е в думата и на правилното място."
                : "is in the word and in the correct spot."}
            </Typography>
          </Box>
          <Box>
            <LettersRow
              first={languageBg ? "Ч" : "P"}
              second={languageBg ? "О" : "I"}
              third={languageBg ? "В" : "L"}
              fourth={languageBg ? "Е" : "L"}
              fifth={languageBg ? "К" : "S"}
              secondValue={1}
            />
            <Typography>
              <span style={{ fontWeight: "bold" }}>
                {languageBg ? "O" : "I"}
              </span>{" "}
              {languageBg
                ? "е в думата, но не на правилното място."
                : "is in the word but in the wrong spot."}
            </Typography>
          </Box>
          <Box>
            <LettersRow
              first={languageBg ? "С" : "V"}
              second={languageBg ? "Ъ" : "A"}
              third={languageBg ? "Р" : "G"}
              fourth={languageBg ? "Ц" : "U"}
              fifth={languageBg ? "Е" : "E"}
              fourthValue={2}
            />
            <Typography>
              <span style={{ fontWeight: "bold" }}>
                {languageBg ? "Ц" : "U"}
              </span>{" "}
              {languageBg
                ? "не се среща в думата на нито едно място."
                : "is not in the word in any spot."}
            </Typography>
          </Box>
          <Divider />
          <Typography marginTop={"20px"}>
            {languageBg
              ? "Нова загадка се публикува всеки ден в полунощ."
              : "A new puzzle is released daily at midnight."}
          </Typography>
          <Divider />
          <Typography marginTop={"20px"}>
            {languageBg
              ? "Тест Акаунт/Парола - john Pa$$w0rd"
              : "Test Account/Password - john Pa$$w0rd"}
          </Typography>
        </CardContent>
      </Card>
    </Backdrop>
  );
}
