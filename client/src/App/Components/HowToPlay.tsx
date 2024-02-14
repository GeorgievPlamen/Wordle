import {
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
import LettersRow from "./LettersRow";
import { useAppDispatch, useAppSelector } from "../Store/configureStore";
import { toggleDisplay } from "./howToPlaySlice";

export default function HowToPlay() {
  const howToPlay = useAppSelector((state) => state.howToPlay);
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{
        display: howToPlay.display,
        minWidth: 275,
        maxWidth: 360,
        position: "absolute",
        zIndex: "999",
        left: "50%",
        marginLeft: { xs: "-180px"},
        top: "10vh",
      }}
    >
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" fontWeight={"bold"} sx={{}}>
          How To Play
        </Typography>
        <Button
          onClick={() => dispatch(toggleDisplay())}
          sx={{ justifySelf: "flex-end", width: "40px" }}
        >
          <Icon component={close} />
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="h6" component="div">
          Guess the Wordle in 6 tries.
        </Typography>
        <Typography>
          <ul>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
        </Typography>
        <Typography fontWeight={"bold"}>Examples</Typography>
        <Box>
          <LettersRow
            first={"W"}
            second={"E"}
            third={"A"}
            fourth={"R"}
            fifth={"Y"}
            firstValue={0}
          />
          <Typography>
            <span style={{ fontWeight: "bold" }}>W</span> is in the word and in
            the correct spot.
          </Typography>
        </Box>
        <Box>
          <LettersRow
            first={"P"}
            second={"I"}
            third={"L"}
            fourth={"L"}
            fifth={"S"}
            secondValue={1}
          />
          <Typography>
            <span style={{ fontWeight: "bold" }}>I</span> is in the word but in
            the wrong spot.
          </Typography>
        </Box>
        <Box>
          <LettersRow
            first={"V"}
            second={"A"}
            third={"G"}
            fourth={"U"}
            fifth={"E"}
            fourthValue={2}
          />
          <Typography>
            <span style={{ fontWeight: "bold" }}>U</span> is not in the word in
            any spot.
          </Typography>
        </Box>
        <Divider />
        <Typography marginTop={"20px"}>
          A new puzzle is released daily at midnight.
        </Typography>
      </CardContent>
    </Card>
  );
}
